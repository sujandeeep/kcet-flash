export interface Formula {
  title: string;
  content: string;
}

export interface SubjectFormulas {
  [key: string]: Formula[];
}

export const CHEAT_SHEETS: SubjectFormulas = {
  Physics: [
    { title: "Electrostatics", content: "F = k q₁q₂ / r²; V = k q / r; E = k q / r²" },
    { title: "Current Electricity", content: "V = IR; P = VI = I²R = V²/R; R = ρL/A" },
    { title: "Magnetism", content: "B = μ₀I / 2R (Center); F = q(v × B); F = BIL sin θ" },
    { title: "Optics", content: "1/f = 1/v + 1/u; n = c/v; sin C = 1/n" },
    { title: "Modern Physics", content: "E = hf; λ = h/p; rₙ ∝ n²/Z; Eₙ = -13.6 Z²/n² eV" }
  ],
  Chemistry: [
    { title: "Solutions", content: "Pₐ = Pₐ⁰ χₐ; ΔT_b = i K_b m; ΔT_f = i K_f m; π = iCRT" },
    { title: "Electrochemistry", content: "E_cell = E⁰_cell - (0.059/n) log Q; ΔG = -nFE_cell" },
    { title: "Chemical Kinetics", content: "k = (2.303/t) log(a/a-x); t₁/₂ = 0.693/k (1st order)" },
    { title: "Thermodynamics", content: "ΔG = ΔH - TΔS; ΔG⁰ = -RT ln K" },
    { title: "Atomic Structure", content: "λ = h/mv; Δx.Δp ≥ h/4π" }
  ],
  Math: [
    { title: "Trigonometry", content: "sin²θ + cos²θ = 1; sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ - sin²θ" },
    { title: "Calculus", content: "d/dx(sin x) = cos x; ∫ (1/x) dx = ln|x|; ∫ eˣ dx = eˣ" },
    { title: "Vectors", content: "a.b = |a||b| cos θ; |a×b| = |a||b| sin θ" },
    { title: "Matrices", content: "A⁻¹ = (adj A) / |A|; |AB| = |A||B|" },
    { title: "Coordinate Geometry", content: "d = √((x₂-x₁)² + (y₂-y₁)²); Slope m = (y₂-y₁)/(x₂-x₁)" }
  ],
  Biology: [
    { title: "Genetics", content: "Monohybrid Ratio: 3:1 (Pheno), 1:2:1 (Geno); Dihybrid: 9:3:3:1" },
    { title: "Photosynthesis", content: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O" },
    { title: "Respiration", content: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (36/38 ATP)" },
    { title: "Ecology", content: "10% Law: Only 10% energy transfers to next trophic level" },
    { title: "Biomolecules", content: "Proteins = Amino Acids; DNA = Nucleotides; Lipids = Fatty Acids + Glycerol" }
  ]
};
