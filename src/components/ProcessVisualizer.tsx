import React, { useState, useEffect, useRef } from 'react';

type SystemState = 'disperso' | 'conectado' | 'optimizado';

export const ProcessVisualizer: React.FC = () => {
  const [state, setState] = useState<SystemState>('optimizado');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle gently if not interacted with, but allow manual toggle
  const states: SystemState[] = ['disperso', 'conectado', 'optimizado'];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Node configurations for each state
  // In 'disperso': nodes are chaotic, tilted, irregular offsets, broken connections
  // In 'conectado': nodes are arranged in a structured grid with linear connections
  // In 'optimizado': nodes are an aligned pipeline with active pulse lines & efficiency badges
  const nodes = [
    {
      id: 1,
      label: 'Entrada de datos',
      code: 'TASK.01',
      coords: {
        disperso: { x: 18, y: 22, rot: -8 },
        conectado: { x: 15, y: 26, rot: 0 },
        optimizado: { x: 15, y: 26, rot: 0 },
      },
      status: state === 'disperso' ? 'Manual' : state === 'conectado' ? 'Estructurado' : 'Digitalizado',
      color: state === 'disperso' ? '#94A3B8' : '#207BF8',
    },
    {
      id: 2,
      label: 'Validación de flujo',
      code: 'TASK.02',
      coords: {
        disperso: { x: 55, y: 16, rot: 6 },
        conectado: { x: 50, y: 26, rot: 0 },
        optimizado: { x: 50, y: 26, rot: 0 },
      },
      status: state === 'disperso' ? 'Cuello botella' : state === 'conectado' ? 'Protocolo' : 'Automatizado',
      color: state === 'disperso' ? '#EF4444' : state === 'conectado' ? '#00164A' : '#207BF8',
    },
    {
      id: 3,
      label: 'Aprobación / Control',
      code: 'TASK.03',
      coords: {
        disperso: { x: 82, y: 38, rot: 12 },
        conectado: { x: 85, y: 26, rot: 0 },
        optimizado: { x: 85, y: 26, rot: 0 },
      },
      status: state === 'disperso' ? 'Retraso' : state === 'conectado' ? 'Trazable' : 'En tiempo real',
      color: state === 'disperso' ? '#F59E0B' : '#00164A',
    },
    {
      id: 4,
      label: 'Operación & Ejecución',
      code: 'SYS.CORE',
      coords: {
        disperso: { x: 26, y: 74, rot: 10 },
        conectado: { x: 30, y: 72, rot: 0 },
        optimizado: { x: 30, y: 72, rot: 0 },
      },
      status: state === 'disperso' ? 'Descoordinado' : state === 'conectado' ? 'Estandarizado' : 'Continuo',
      color: state === 'disperso' ? '#94A3B8' : '#00164A',
    },
    {
      id: 5,
      label: 'Registro & Métricas TI',
      code: 'SYS.SYNC',
      coords: {
        disperso: { x: 74, y: 80, rot: -10 },
        conectado: { x: 70, y: 72, rot: 0 },
        optimizado: { x: 70, y: 72, rot: 0 },
      },
      status: state === 'disperso' ? 'Sin datos' : state === 'conectado' ? 'Centralizado' : 'Optimizado',
      color: state === 'disperso' ? '#EF4444' : state === 'conectado' ? '#207BF8' : '#10B981',
    },
  ];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full rounded-2xl bg-[#00164A] text-white p-6 sm:p-7 shadow-2xl border border-[#0A2563] overflow-hidden select-none group"
    >
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #207BF8 1px, transparent 1px),
            linear-gradient(to bottom, #207BF8 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle radial ambient light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#207BF8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#207BF8]/10 rounded-full blur-2xl pointer-events-none" />

      {/* System Console Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#207BF8] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#207BF8] uppercase font-bold block">
              INNSTRET OPERATIONAL ARCHITECTURE
            </span>
            <span className="text-xs font-semibold text-gray-200">
              Transformación de Flujos Operativos
            </span>
          </div>
        </div>

        {/* State Interactive Switcher */}
        <div className="flex items-center space-x-1 bg-white/10 p-1 rounded-lg border border-white/10 text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setState('disperso')}
            className={`px-2.5 py-1 rounded transition-all ${
              state === 'disperso'
                ? 'bg-red-500/80 text-white font-bold shadow-xs'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Ver estado de procesos dispersos"
          >
            01. Disperso
          </button>
          <button
            type="button"
            onClick={() => setState('conectado')}
            className={`px-2.5 py-1 rounded transition-all ${
              state === 'conectado'
                ? 'bg-[#207BF8] text-white font-bold shadow-xs'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Ver estructuración con INNSTRET"
          >
            02. Conectado
          </button>
          <button
            type="button"
            onClick={() => setState('optimizado')}
            className={`px-2.5 py-1 rounded transition-all ${
              state === 'optimizado'
                ? 'bg-emerald-500 text-white font-bold shadow-xs'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Ver sistema optimizado y digitalizado"
          >
            03. Optimizado
          </button>
        </div>
      </div>

      {/* Main Living Transformation Canvas */}
      <div className="relative z-10 w-full h-72 sm:h-80 border border-white/10 rounded-xl bg-[#001035]/80 overflow-hidden">
        
        {/* SVG Pipeline Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="activeLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#207BF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="disorderedLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Lines connecting nodes based on state */}
          {state === 'disperso' ? (
            <>
              {/* Broken, crossed, irregular dashed lines */}
              <line x1="20%" y1="25%" x2="55%" y2="18%" stroke="url(#disorderedLine)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="55%" y1="18%" x2="80%" y2="40%" stroke="url(#disorderedLine)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="20%" y1="25%" x2="28%" y2="72%" stroke="url(#disorderedLine)" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="28%" y1="72%" x2="72%" y2="78%" stroke="url(#disorderedLine)" strokeWidth="1.5" strokeDasharray="5 5" />
              {/* Bottleneck alert indicator */}
              <circle cx="55%" cy="18%" r="14" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" />
            </>
          ) : state === 'conectado' ? (
            <>
              {/* Structured architectural connections */}
              <path d="M 18% 28% L 50% 28% L 85% 28%" fill="none" stroke="#207BF8" strokeWidth="2" strokeOpacity="0.7" />
              <path d="M 50% 28% L 50% 50% L 32% 50% L 32% 72%" fill="none" stroke="#207BF8" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <path d="M 50% 28% L 50% 50% L 68% 50% L 68% 72%" fill="none" stroke="#207BF8" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <path d="M 32% 72% L 68% 72%" fill="none" stroke="#207BF8" strokeWidth="2" strokeOpacity="0.7" />
            </>
          ) : (
            <>
              {/* Optimizado: Clean high-speed pipeline with active pulses */}
              <path d="M 18% 28% L 50% 28% L 85% 28%" fill="none" stroke="url(#activeLine)" strokeWidth="2.5" />
              <path d="M 50% 28% L 50% 50% L 32% 50% L 32% 72%" fill="none" stroke="#207BF8" strokeWidth="2" />
              <path d="M 50% 28% L 50% 50% L 68% 50% L 68% 72%" fill="none" stroke="#10B981" strokeWidth="2" />
              <path d="M 32% 72% L 68% 72%" fill="none" stroke="url(#activeLine)" strokeWidth="2.5" />
              
              {/* Animated pulses along the pipeline */}
              <circle cx="34%" cy="28%" r="3.5" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="68%" cy="28%" r="3.5" fill="#207BF8" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="50%" cy="72%" r="3.5" fill="#10B981" className="animate-ping" style={{ animationDuration: '1.8s' }} />
            </>
          )}
        </svg>

        {/* Nodes rendering with coordinates depending on state */}
        {nodes.map((node) => {
          const coord = node.coords[state];
          const isSelected = activeNode === node.id;

          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{
                left: `${coord.x}%`,
                top: `${coord.y}%`,
                transform: `translate(-50%, -50%) rotate(${coord.rot}deg)`,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`absolute cursor-pointer group/node ${
                isSelected ? 'scale-105 z-30' : 'z-20'
              }`}
            >
              <div 
                className={`p-2.5 sm:p-3 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  state === 'disperso'
                    ? 'bg-[#0A1A3A]/90 border-red-500/30 shadow-md'
                    : state === 'conectado'
                    ? 'bg-[#05173D] border-[#207BF8]/50 shadow-md'
                    : 'bg-[#001E55] border-[#207BF8] shadow-lg ring-1 ring-[#207BF8]/40'
                }`}
              >
                <div className="flex items-center justify-between space-x-3 mb-1">
                  <span className="text-[9px] font-mono tracking-wider font-bold text-gray-400">
                    {node.code}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                </div>

                <div className="text-xs font-bold text-white whitespace-nowrap leading-tight mb-1">
                  {node.label}
                </div>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[9px] font-mono uppercase text-gray-400">Estado:</span>
                  <span 
                    className="text-[10px] font-mono font-bold tracking-tight"
                    style={{ color: node.color }}
                  >
                    {node.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Dynamic Center Transformation Core Stamp */}
        <div className="absolute bottom-3 right-3 z-20 bg-[#00164A]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-right">
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider block">
            {state === 'disperso' ? 'DIAGNÓSTICO INICIAL' : state === 'conectado' ? 'ESTRUCTURA INNSTRET' : 'OPERACIÓN SISTEMATIZADA'}
          </span>
          <span className={`text-xs font-mono font-bold ${
            state === 'disperso' ? 'text-red-400' : state === 'conectado' ? 'text-[#207BF8]' : 'text-emerald-400'
          }`}>
            {state === 'disperso' ? 'INEFICIENCIA & DISPERSIÓN' : state === 'conectado' ? 'FLUJOS ALINEADOS' : 'SISTEMA OPTIMIZADO ✓'}
          </span>
        </div>
      </div>

      {/* Footer System Legend / Metric Bar */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-gray-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#207BF8]" />
            <span>Flujo Operativo</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Automatización Activa</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 text-gray-400 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>Trazabilidad TI</span>
          </div>
        </div>

        <span className="text-[10px] font-mono text-gray-400">
          * Interactúa con los estados para observar la transformación
        </span>
      </div>
    </div>
  );
};
