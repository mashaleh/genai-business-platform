"use client"

import { useEffect, useRef } from "react"

const COLORS = ["#2bc4b6", "#3a86ff", "#8b5cf6"]
const LINK = 130

export function ConstellationBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: string }
    let w = 0, h = 0, dpr = 1
    let nodes: Node[] = []
    const mouse = { x: -999, y: -999 }
    let rafId: number

    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + "px"
      canvas!.style.height = h + "px"
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(70, Math.round((w * h) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 1.2,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        const dx = n.x - mouse.x, dy = n.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120 && d > 0) { n.x += (dx / d) * 1.2; n.y += (dy / d) * 1.2 }
      }

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK) {
            ctx!.globalAlpha = (1 - dist / LINK) * 0.14
            ctx!.strokeStyle = a.c
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // Draw dots
      ctx!.globalAlpha = 1
      for (const n of nodes) {
        ctx!.fillStyle = n.c
        ctx!.globalAlpha = 0.45
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      rafId = requestAnimationFrame(frame)
    }

    function onMouseMove(e: MouseEvent) { mouse.x = e.clientX; mouse.y = e.clientY }
    function onMouseLeave() { mouse.x = mouse.y = -999 }

    size()
    window.addEventListener("resize", size)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)
    frame()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", size)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  )
}
