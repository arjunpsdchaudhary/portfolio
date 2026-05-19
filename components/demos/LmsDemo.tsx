import React, { useState } from 'react';
import { BookOpen, UserCheck, Shield, PlusCircle, CheckCircle, Lock } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  instructor: string;
  enrolled: number;
  isEnrolled: boolean;
  category: string;
  jwtTokenRequired: boolean;
}

export const LmsDemo: React.FC = () => {
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [courses, setCourses] = useState<Course[]>([
    { id: 'c1', title: 'Next.js 15 Deep Dive & Server Actions', instructor: 'Arjun P. Chaudhary', enrolled: 142, isEnrolled: true, category: 'Web Dev', jwtTokenRequired: true },
    { id: 'c2', title: 'Graph Database Modeling with Neo4j', instructor: 'Dr. Siddharth', enrolled: 89, isEnrolled: false, category: 'Database', jwtTokenRequired: true },
    { id: 'c3', title: 'Secure APIs with PASETO & JWT Tokens', instructor: 'Arjun P. Chaudhary', enrolled: 210, isEnrolled: false, category: 'Security', jwtTokenRequired: true },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newCat, setNewCat] = useState('Full Stack');
  const [tokenStatus, setTokenStatus] = useState<string | null>('Valid JWT Token (Bearer eyJhbGciOi...)');

  const handleEnroll = (id: string) => {
    setCourses(courses.map(c => c.id === id ? { ...c, isEnrolled: true, enrolled: c.enrolled + 1 } : c));
    setTokenStatus(`Enrolled successfully! Secured via JWT Bearer token [expires: 24h]`);
    setTimeout(() => setTokenStatus('Valid JWT Token (Bearer eyJhbGciOi...)'), 3500);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const newCourse: Course = {
      id: `c-${Date.now()}`,
      title: newTitle,
      instructor: 'Arjun P. Chaudhary',
      enrolled: 0,
      isEnrolled: false,
      category: newCat,
      jwtTokenRequired: true
    };
    setCourses([newCourse, ...courses]);
    setNewTitle('');
    setTokenStatus('Course published to MongoDB successfully with RBAC verification.');
    setTimeout(() => setTokenStatus('Valid JWT Token (Bearer eyJhbGciOi...)'), 3500);
  };

  return (
    <div className="bg-[#0f172a] rounded-xl border border-slate-700/80 p-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-white flex items-center gap-2">
              EduSphere RBAC Simulator
              <span className="text-[10px] uppercase px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-mono rounded">JWT Secure Auth</span>
            </h4>
            <p className="text-xs text-slate-400">Role-based portal with Next.js & MongoDB simulation</p>
          </div>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={() => setRole('student')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              role === 'student' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck size={14} /> Student View
          </button>
          <button
            onClick={() => setRole('teacher')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              role === 'teacher' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Shield size={14} /> Teacher View
          </button>
        </div>
      </div>

      {/* Simulated Auth Banner */}
      {tokenStatus && (
        <div className="mb-4 bg-slate-900/90 border border-emerald-500/30 rounded-lg p-2.5 px-4 flex items-center justify-between text-xs text-emerald-400 font-mono">
          <span className="flex items-center gap-2">
            <Lock size={14} className="text-emerald-400" />
            {tokenStatus}
          </span>
          <span className="bg-emerald-950/80 px-2 py-0.5 rounded text-[10px] border border-emerald-800 text-emerald-300">RBAC Active: {role.toUpperCase()}</span>
        </div>
      )}

      {/* Teacher View: Create Course Form */}
      {role === 'teacher' ? (
        <div className="mb-6 bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-4">
          <h5 className="text-sm font-semibold text-indigo-300 mb-3 flex items-center gap-2">
            <PlusCircle size={16} /> Teacher Control Panel: Publish New Course
          </h5>
          <form onSubmit={handleCreateCourse} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g. Master Microservices with Java & Spring Boot"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              required
            />
            <select
              value={newCat}
              onChange={(e) => setNewCat(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Web Dev">Web Dev</option>
              <option value="Database">Database</option>
              <option value="Security">Security</option>
              <option value="Full Stack">Full Stack</option>
            </select>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-5 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              Publish to DB
            </button>
          </form>
        </div>
      ) : null}

      {/* Course List */}
      <div className="space-y-3">
        <h5 className="text-xs uppercase font-mono text-slate-400 font-semibold tracking-wider px-1">
          {role === 'teacher' ? 'Your Managed Courses' : 'Available Course Catalog'}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course.id} className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                    {course.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{course.enrolled} Enrolled</span>
                </div>
                <h6 className="font-semibold text-white text-sm line-clamp-2 mb-1">{course.title}</h6>
                <p className="text-[11px] text-slate-400">Instructor: <span className="text-slate-300">{course.instructor}</span></p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                {role === 'student' ? (
                  course.isEnrolled ? (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium py-1">
                      <CheckCircle size={14} /> Enrolled
                    </span>
                  ) : (
                    <button
                      onClick={() => handleEnroll(course.id)}
                      className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-colors shadow"
                    >
                      Enroll with JWT Token
                    </button>
                  )
                ) : (
                  <span className="text-[11px] text-indigo-400 font-mono bg-indigo-950/60 px-2 py-1 rounded border border-indigo-800/60 w-full text-center">
                    Manage Curriculum
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
