import React, { useMemo } from "react";
import { motion } from "motion/react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const formulas = [
  "y = Wx + b",
  "x \\cdot y = \\sum_{i=1}^{n} x_i y_i",
  "c_{ij} = \\sum_{k} a_{ik} b_{kj}",
  "\\|x\\|_1 = \\sum_{i=1}^{n} |x_i|",
  "\\|x\\|_2 = \\sqrt{\\sum_{i=1}^{n} x_i^2}",
  "\\frac{dy}{dx}",
  "\\frac{\\partial f}{\\partial x_i}",
  "\\nabla f(x) = [\\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n}]",
  "\\frac{dz}{dx} = \\frac{dz}{dy}\\frac{dy}{dx}",
  "\\mathbb{E}[X] = \\sum_x x P(x)",
  "\\mathrm{Var}(X) = \\mathbb{E}[(X-\\mu)^2]",
  "\\sigma(x) = \\frac{1}{1+e^{-x}}",
  "\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}",
  "\\mathrm{ReLU}(x) = \\max(0, x)",
  "\\mathcal{L} = \\frac{1}{n}\\sum_{i=1}^{n}(y_i-\\hat{y}_i)^2",
  "\\theta = \\theta - \\eta \\nabla_\\theta \\mathcal{L}",
  "m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t",
  "\\text{Attention}(Q,K,V)=\\text{softmax}(\\frac{QK^T}{\\sqrt{d_k}})V",
  "H(X) = -\\sum_{i} p(x_i)\\log p(x_i)",
  "D_{KL}(P\\|Q)=\\sum_i P(i)\\log\\frac{P(i)}{Q(i)}",
  "\\cos(\\theta)=\\frac{x\\cdot y}{\\|x\\|\\|y\\|}",
  "\\frac{\\partial \\mathcal{L}}{\\partial W} = \\frac{\\partial \\mathcal{L}}{\\partial z}x^T"
];

interface MathFormulaProps {
  formula: string;
  delay: number;
  duration: number;
  initialX: number;
  initialY: number;
  size: number;
  opacity: number;
}

const MathFormula: React.FC<MathFormulaProps> = ({ 
  formula, delay, duration, initialX, initialY, size, opacity 
}) => {
  return (
    <motion.div
      initial={{ x: `${initialX}vw`, y: `${initialY}vh`, opacity: 0 }}
      animate={{
        y: [`${initialY}vh`, `${initialY - 15}vh`, `${initialY}vh`],
        x: [`${initialX}vw`, `${initialX + 8}vw`, `${initialX}vw`],
        opacity: [0, opacity, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className="fixed pointer-events-none select-none text-pencil font-mono whitespace-nowrap"
      style={{ fontSize: `${size}px`, zIndex: 0 }}
    >
      <InlineMath math={formula} />
    </motion.div>
  );
};

export const MathBackground: React.FC = () => {
  const items = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      formula: formulas[Math.floor(Math.random() * formulas.length)],
      delay: Math.random() * 8,
      duration: 25 + Math.random() * 25,
      initialX: Math.random() * 90,
      initialY: Math.random() * 90,
      size: 12 + Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.2, // 0.3 - 0.5
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item) => (
        <MathFormula key={item.id} {...item} />
      ))}
    </div>
  );
};
