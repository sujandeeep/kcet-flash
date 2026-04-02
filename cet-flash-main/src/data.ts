export interface Question {
  id: string;
  subject: "Physics" | "Chemistry" | "Math" | "Biology";
  chapter: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  yearsAsked: number[];
  tag: string[];
  explanation: {
    correct: string;
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const KCET_DATA: Question[] = [
  // PHYSICS
  {
    id: "p1",
    subject: "Physics",
    chapter: "Electrostatics",
    question: "The work done in moving a unit positive charge from one point to another on an equipotential surface is:",
    options: {
      A: "Positive",
      B: "Negative",
      C: "Zero",
      D: "Infinite"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated", "⭐ Important"],
    explanation: {
      correct: "On an equipotential surface, the potential difference (V) is zero. Since W = qV, the work done is zero.",
      A: "Positive work requires a potential difference where final potential is higher.",
      B: "Negative work requires moving against the field to a lower potential.",
      C: "Correct! No potential difference means no work is needed.",
      D: "Infinite work is impossible in a finite electrostatic field."
    }
  },
  {
    id: "p2",
    subject: "Physics",
    chapter: "Current Electricity",
    question: "The resistance of a wire is R. If it is stretched to double its length, its new resistance will be:",
    options: {
      A: "2R",
      B: "4R",
      C: "R/2",
      D: "R/4"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2020],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "When a wire is stretched, its volume remains constant. If length doubles, area becomes half. R ∝ L/A, so new R = (2L)/(A/2) = 4R.",
      A: "This only considers length change, ignoring the area decrease.",
      B: "Correct! Resistance increases by the square of the stretching factor (n²R).",
      C: "Resistance increases on stretching, not decreases.",
      D: "This would happen if the wire was compressed, not stretched."
    }
  },
  // CHEMISTRY
  {
    id: "c1",
    subject: "Chemistry",
    chapter: "Solutions",
    question: "Which of the following is a colligative property?",
    options: {
      A: "Boiling point",
      B: "Vapour pressure",
      C: "Osmotic pressure",
      D: "Freezing point"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2019, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Colligative properties depend on the number of solute particles. Osmotic pressure is one of the four main colligative properties.",
      A: "Boiling point itself is not colligative; 'Elevation in boiling point' is.",
      B: "Vapour pressure is not colligative; 'Relative lowering of vapour pressure' is.",
      C: "Correct! Osmotic pressure depends directly on molarity (number of particles).",
      D: "Freezing point is not colligative; 'Depression in freezing point' is."
    }
  },
  {
    id: "c2",
    subject: "Chemistry",
    chapter: "Biomolecules",
    question: "Which of the following vitamins is water-soluble?",
    options: {
      A: "Vitamin A",
      B: "Vitamin D",
      C: "Vitamin C",
      D: "Vitamin K"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Vitamins B and C are water-soluble. Vitamins A, D, E, and K are fat-soluble (ADEK).",
      A: "Vitamin A is fat-soluble (stored in liver).",
      B: "Vitamin D is fat-soluble.",
      C: "Correct! Vitamin C must be supplied regularly as it's excreted in urine.",
      D: "Vitamin K is fat-soluble."
    }
  },
  // MATH
  {
    id: "m1",
    subject: "Math",
    chapter: "Matrices",
    question: "If A is a square matrix of order 3 and |A| = 5, then |adj A| is equal to:",
    options: {
      A: "5",
      B: "25",
      C: "125",
      D: "1/5"
    },
    correctAnswer: "B",
    yearsAsked: [2017, 2019, 2021],
    tag: ["🔥 Repeated", "⭐ Important"],
    explanation: {
      correct: "The formula is |adj A| = |A|^(n-1). Here n=3, so |adj A| = 5^(3-1) = 5² = 25.",
      A: "Forgot the power (n-1).",
      B: "Correct! Applied |A|^(n-1) correctly.",
      C: "Used |A|^n instead of |A|^(n-1).",
      D: "Confused with |A⁻¹|."
    }
  },
  {
    id: "m2",
    subject: "Math",
    chapter: "Calculus",
    question: "The derivative of e^(log x) with respect to x is:",
    options: {
      A: "e^(log x)",
      B: "1/x",
      C: "1",
      D: "0"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2020],
    tag: ["⭐ Important"],
    explanation: {
      correct: "e^(log x) simplifies to x. The derivative of x with respect to x is 1.",
      A: "Forgot to simplify the expression first.",
      B: "Confused with the derivative of log x.",
      C: "Correct! Simplified e^(log x) = x, then d/dx(x) = 1.",
      D: "Derivative of a variable is not zero."
    }
  },
  // BIOLOGY
  {
    id: "b1",
    subject: "Biology",
    chapter: "Genetics",
    question: "The phenotypic ratio of a dihybrid cross in F2 generation is:",
    options: {
      A: "3:1",
      B: "1:2:1",
      C: "9:3:3:1",
      D: "1:1:1:1"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Mendel's dihybrid cross (e.g., Round Yellow x Wrinkled Green) results in a 9:3:3:1 ratio in F2.",
      A: "This is the monohybrid phenotypic ratio.",
      B: "This is the monohybrid genotypic ratio.",
      C: "Correct! 9 (both dominant), 3 (one dom), 3 (other dom), 1 (both rec).",
      D: "This is the ratio for a dihybrid test cross."
    }
  },
  {
    id: "b2",
    subject: "Biology",
    chapter: "Ecology",
    question: "Which of the following is an example of ex-situ conservation?",
    options: {
      A: "National Park",
      B: "Wildlife Sanctuary",
      C: "Seed Bank",
      D: "Biosphere Reserve"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2019, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Ex-situ conservation involves protecting species outside their natural habitat. Seed banks, zoos, and botanical gardens are examples.",
      A: "National Parks are in-situ (on-site) conservation.",
      B: "Wildlife Sanctuaries are in-situ conservation.",
      C: "Correct! Seeds are stored in controlled conditions away from nature.",
      D: "Biosphere Reserves are in-situ conservation."
    }
  },
  // ADDITIONAL PHYSICS
  {
    id: "p3",
    subject: "Physics",
    chapter: "Optics",
    question: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. The power of the combination is:",
    options: {
      A: "+2.5 D",
      B: "-2.5 D",
      C: "+5.0 D",
      D: "-5.0 D"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Power P = P1 + P2 = 1/f1 + 1/f2. P = 1/0.2 + 1/(-0.4) = 5 - 2.5 = +2.5 D.",
      A: "Correct! Net power is positive as the convex lens is stronger.",
      B: "Incorrect sign. The combination acts as a convex lens.",
      C: "This ignores the concave lens's negative power.",
      D: "Incorrect magnitude and sign."
    }
  },
  {
    id: "p4",
    subject: "Physics",
    chapter: "Dual Nature",
    question: "The de-Broglie wavelength of a particle is λ. If its kinetic energy is doubled, the new wavelength will be:",
    options: {
      A: "2λ",
      B: "λ/2",
      C: "√2λ",
      D: "λ/√2"
    },
    correctAnswer: "D",
    yearsAsked: [2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "λ = h/√(2mK). So λ ∝ 1/√K. If K becomes 2K, λ becomes λ/√2.",
      A: "Wavelength decreases as energy increases.",
      B: "This would happen if energy was quadrupled.",
      C: "Wavelength is inversely proportional to square root of energy.",
      D: "Correct! λ' = h/√(2m * 2K) = λ/√2."
    }
  },
  // ADDITIONAL CHEMISTRY
  {
    id: "c3",
    subject: "Chemistry",
    chapter: "Haloalkanes",
    question: "Which of the following is most reactive towards SN1 reaction?",
    options: {
      A: "Methyl chloride",
      B: "Ethyl chloride",
      C: "Isopropyl chloride",
      D: "tert-Butyl chloride"
    },
    correctAnswer: "D",
    yearsAsked: [2014, 2019, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "SN1 reactivity depends on carbocation stability. 3° > 2° > 1° > Methyl. tert-Butyl forms a stable 3° carbocation.",
      A: "Methyl halides are least reactive in SN1 (best in SN2).",
      B: "Primary halides have very low SN1 reactivity.",
      C: "Secondary halides are less reactive than tertiary.",
      D: "Correct! Tertiary carbocation is highly stabilized by inductive effect and hyperconjugation."
    }
  },
  {
    id: "c4",
    subject: "Chemistry",
    chapter: "p-Block",
    question: "The noble gas used in magnetic resonance imaging (MRI) is:",
    options: {
      A: "Helium",
      B: "Neon",
      C: "Argon",
      D: "Xenon"
    },
    correctAnswer: "A",
    yearsAsked: [2018, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Liquid helium is used to cool the superconducting magnets in MRI machines to extremely low temperatures.",
      A: "Correct! Its low boiling point makes it ideal for cryogenics.",
      B: "Neon is used in discharge tubes and signs.",
      C: "Argon is used to provide inert atmosphere.",
      D: "Xenon is used in high-speed electronic flashes."
    }
  },
  // ADDITIONAL MATH
  {
    id: "m3",
    subject: "Math",
    chapter: "Vectors",
    question: "The projection of vector a = i - j on vector b = i + j is:",
    options: {
      A: "0",
      B: "1",
      C: "√2",
      D: "2"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Projection = (a.b)/|b|. a.b = (1)(1) + (-1)(1) = 0. Since dot product is 0, projection is 0.",
      A: "Correct! The vectors are perpendicular.",
      B: "Incorrect dot product calculation.",
      C: "Confused with magnitude of b.",
      D: "Incorrect dot product calculation."
    }
  },
  {
    id: "m4",
    subject: "Math",
    chapter: "Probability",
    question: "If A and B are independent events such that P(A) = 0.3 and P(B) = 0.4, then P(A ∩ B) is:",
    options: {
      A: "0.7",
      B: "0.1",
      C: "0.12",
      D: "0.5"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2019, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "For independent events, P(A ∩ B) = P(A) * P(B) = 0.3 * 0.4 = 0.12.",
      A: "This is P(A) + P(B), not the intersection.",
      B: "Incorrect subtraction.",
      C: "Correct! Multiplied probabilities for independent events.",
      D: "Incorrect addition/logic."
    }
  },
  // NEW QUESTIONS
  {
    id: "p5",
    subject: "Physics",
    chapter: "Magnetism",
    question: "The magnetic susceptibility of a paramagnetic substance varies with absolute temperature T as:",
    options: {
      A: "T",
      B: "T²",
      C: "1/T",
      D: "1/T²"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "According to Curie's Law, the magnetic susceptibility (χ) of a paramagnetic material is inversely proportional to its absolute temperature (T). χ ∝ 1/T.",
      A: "Susceptibility decreases with temperature, not increases.",
      B: "Incorrect relationship.",
      C: "Correct! This is Curie's Law.",
      D: "Incorrect power of T."
    }
  },
  {
    id: "p6",
    subject: "Physics",
    chapter: "Semiconductors",
    question: "In a p-type semiconductor, the majority charge carriers are:",
    options: {
      A: "Electrons",
      B: "Holes",
      C: "Protons",
      D: "Neutrons"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "In p-type semiconductors, trivalent impurities create 'holes' which act as the majority charge carriers.",
      A: "Electrons are majority carriers in n-type semiconductors.",
      B: "Correct! 'p' stands for positive (holes).",
      C: "Protons are in the nucleus and don't carry charge in semiconductors.",
      D: "Neutrons are neutral."
    }
  },
  {
    id: "c5",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "The unit of molar conductivity is:",
    options: {
      A: "S cm² mol⁻¹",
      B: "S cm⁻¹ mol⁻¹",
      C: "S cm² mol",
      D: "S⁻¹ cm² mol⁻¹"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Molar conductivity (Λm) = κ / C. Units: (S cm⁻¹) / (mol cm⁻³) = S cm² mol⁻¹.",
      A: "Correct! Standard SI/CGS unit for molar conductivity.",
      B: "Incorrect power of cm.",
      C: "Incorrect power of mol.",
      D: "Incorrect power of S (Siemens)."
    }
  },
  {
    id: "c6",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    question: "The oxidation state of central metal atom in [Co(NH₃)₆]Cl₃ is:",
    options: {
      A: "+2",
      B: "+3",
      C: "+4",
      D: "0"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "NH₃ is a neutral ligand (0). Cl has -1 charge. x + 6(0) + 3(-1) = 0 => x = +3.",
      A: "Incorrect calculation.",
      B: "Correct! Cobalt is in +3 state here.",
      C: "Cobalt rarely shows +4 in simple complexes.",
      D: "Metal is not in zero oxidation state."
    }
  },
  {
    id: "m5",
    subject: "Math",
    chapter: "Trigonometry",
    question: "The value of sin⁻¹(sin 2π/3) is:",
    options: {
      A: "2π/3",
      B: "π/3",
      C: "-π/3",
      D: "π/6"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Principal value branch of sin⁻¹ is [-π/2, π/2]. 2π/3 is outside. sin(2π/3) = sin(π - π/3) = sin(π/3). So sin⁻¹(sin π/3) = π/3.",
      A: "Outside the principal value branch.",
      B: "Correct! Within the range [-π/2, π/2].",
      C: "Incorrect sign.",
      D: "Incorrect value."
    }
  },
  {
    id: "m6",
    subject: "Math",
    chapter: "Differential Equations",
    question: "The order and degree of the differential equation (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 are:",
    options: {
      A: "Order 2, Degree 3",
      B: "Order 2, Degree Not Defined",
      C: "Order 3, Degree 2",
      D: "Order 1, Degree 2"
    },
    correctAnswer: "B",
    yearsAsked: [2017, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The highest derivative is d²y/dx², so order is 2. Since it's not a polynomial in derivatives (due to sin(dy/dx)), the degree is not defined.",
      A: "Degree is only defined for polynomial equations in derivatives.",
      B: "Correct! Order is 2, but degree is undefined.",
      C: "Order is 2, not 3.",
      D: "Order is 2, not 1."
    }
  },
  {
    id: "b3",
    subject: "Biology",
    chapter: "Reproduction",
    question: "Double fertilization is a characteristic feature of:",
    options: {
      A: "Algae",
      B: "Gymnosperms",
      C: "Angiosperms",
      D: "Bryophytes"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Double fertilization (syngamy + triple fusion) is unique to flowering plants (Angiosperms).",
      A: "Algae have simpler fertilization.",
      B: "Gymnosperms have single fertilization.",
      C: "Correct! Unique to Angiosperms.",
      D: "Bryophytes have single fertilization."
    }
  },
  {
    id: "b4",
    subject: "Biology",
    chapter: "Evolution",
    question: "The 'Theory of Natural Selection' was proposed by:",
    options: {
      A: "Lamarck",
      B: "Darwin",
      C: "Hugo de Vries",
      D: "Mendel"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2019, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Charles Darwin proposed the theory of evolution by natural selection in his book 'On the Origin of Species'.",
      A: "Lamarck proposed the theory of inheritance of acquired characters.",
      B: "Correct! Darwin is the father of evolution.",
      C: "Hugo de Vries proposed the Mutation Theory.",
      D: "Mendel is the father of Genetics."
    }
  },
  // PHYSICS (20 NEW QUESTIONS)
  {
    id: "p7",
    subject: "Physics",
    chapter: "Units & Measurements",
    question: "The dimensions of permittivity of free space (ε₀) are:",
    options: {
      A: "[M⁻¹ L⁻³ T⁴ A²]",
      B: "[M L³ T⁻⁴ A⁻²]",
      C: "[M⁻¹ L³ T⁻⁴ A²]",
      D: "[M L⁻³ T⁴ A⁻²]"
    },
    correctAnswer: "A",
    yearsAsked: [2014, 2018, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "From Coulomb's Law, F = (1/4πε₀) * (q₁q₂/r²). ε₀ = q² / (F * r²). Dimensions: [A²T²] / ([MLT⁻²][L²]) = [M⁻¹L⁻³T⁴A²].",
      A: "Correct! Derived from the electrostatic force formula.",
      B: "These are dimensions of 1/ε₀.",
      C: "Incorrect power of L.",
      D: "Incorrect signs for M and L."
    }
  },
  {
    id: "p8",
    subject: "Physics",
    chapter: "Motion in a Plane",
    question: "A projectile is fired at an angle of 45° with the horizontal. The ratio of its maximum height to its horizontal range is:",
    options: {
      A: "1:1",
      B: "1:2",
      C: "1:4",
      D: "4:1"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2019, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "H = u²sin²θ/2g and R = u²sin2θ/g. H/R = (sin²θ/2g) / (sin2θ/g) = tanθ/4. For θ=45°, H/R = 1/4.",
      A: "Incorrect. Range is much larger than height at 45°.",
      B: "Incorrect ratio.",
      C: "Correct! H/R = (tan 45°)/4 = 1/4.",
      D: "Inverse ratio."
    }
  },
  {
    id: "p9",
    subject: "Physics",
    chapter: "Laws of Motion",
    question: "The maximum velocity with which a car can safely take a turn of radius r on a horizontal road (coefficient of friction μ) is:",
    options: {
      A: "√(μrg)",
      B: "μrg",
      C: "√(rg/μ)",
      D: "μ√(rg)"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2020],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The centripetal force is provided by friction: mv²/r = μmg. Solving for v gives v = √(μrg).",
      A: "Correct! This is the standard formula for safe speed on a flat curve.",
      B: "Missing the square root.",
      C: "Incorrect relationship with friction.",
      D: "Incorrect placement of μ."
    }
  },
  {
    id: "p10",
    subject: "Physics",
    chapter: "Work, Energy & Power",
    question: "A body of mass 5 kg is moving with a momentum of 10 kg m/s. Its kinetic energy is:",
    options: {
      A: "10 J",
      B: "20 J",
      C: "50 J",
      D: "100 J"
    },
    correctAnswer: "A",
    yearsAsked: [2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "K.E. = p² / 2m. K.E. = (10)² / (2 * 5) = 100 / 10 = 10 J.",
      A: "Correct! Using the relation between momentum and kinetic energy.",
      B: "Incorrect calculation.",
      C: "Incorrect calculation.",
      D: "Forgot to divide by 2m."
    }
  },
  {
    id: "p11",
    subject: "Physics",
    chapter: "Gravitation",
    question: "The escape velocity from the surface of the Earth is v. The escape velocity from a planet with double the radius and same density as Earth is:",
    options: {
      A: "v",
      B: "2v",
      C: "4v",
      D: "v/2"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "vₑ = √(2GM/R). Since M = ρ * (4/3)πR³, vₑ ∝ R√ρ. For same density, vₑ ∝ R. If R doubles, vₑ doubles.",
      A: "Escape velocity depends on radius.",
      B: "Correct! Escape velocity is directly proportional to radius for constant density.",
      C: "Incorrect scaling.",
      D: "Escape velocity increases with radius."
    }
  },
  {
    id: "p12",
    subject: "Physics",
    chapter: "Properties of Solids",
    question: "The Young's modulus of a wire of length L and radius r is Y. If the length is reduced to L/2 and radius to r/2, its Young's modulus will be:",
    options: {
      A: "Y",
      B: "2Y",
      C: "4Y",
      D: "Y/2"
    },
    correctAnswer: "A",
    yearsAsked: [2014, 2019, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Young's modulus is a material property and does not depend on the dimensions (length or radius) of the wire.",
      A: "Correct! Material properties are independent of dimensions.",
      B: "Incorrect. Y is constant for a given material.",
      C: "Incorrect. Y is constant.",
      D: "Incorrect. Y is constant."
    }
  },
  {
    id: "p13",
    subject: "Physics",
    chapter: "Thermodynamics",
    question: "In an isothermal process, the internal energy of an ideal gas:",
    options: {
      A: "Increases",
      B: "Decreases",
      C: "Remains constant",
      D: "Becomes zero"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2020, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "For an ideal gas, internal energy depends only on temperature. In an isothermal process, ΔT = 0, so ΔU = 0.",
      A: "Internal energy only increases if temperature increases.",
      B: "Internal energy only decreases if temperature decreases.",
      C: "Correct! Constant temperature means constant internal energy for ideal gases.",
      D: "Internal energy is not zero unless temperature is absolute zero."
    }
  },
  {
    id: "p14",
    subject: "Physics",
    chapter: "Oscillations",
    question: "The time period of a simple pendulum of length L is T. If the pendulum is taken to the moon (where g is 1/6th of Earth), the new time period will be:",
    options: {
      A: "T/√6",
      B: "√6 T",
      C: "6T",
      D: "T/6"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2019, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "T = 2π√(L/g). So T ∝ 1/√g. If g becomes g/6, T becomes √(6)T.",
      A: "Time period increases when gravity decreases.",
      B: "Correct! T' = 2π√(L / (g/6)) = √6 * 2π√(L/g) = √6 T.",
      C: "Incorrect scaling factor.",
      D: "Incorrect scaling factor."
    }
  },
  {
    id: "p15",
    subject: "Physics",
    chapter: "Electrostatics",
    question: "Two point charges +q and -q are placed at a distance d apart. The electric potential at the midpoint between them is:",
    options: {
      A: "Zero",
      B: "2kq/d",
      C: "kq/d²",
      D: "4kq/d"
    },
    correctAnswer: "A",
    yearsAsked: [2017, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Potential V = V₁ + V₂ = kq/(d/2) + k(-q)/(d/2) = 0.",
      A: "Correct! Potentials from equal and opposite charges cancel out at the midpoint.",
      B: "This would be the case if both charges were positive.",
      C: "Incorrect formula for potential.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "p16",
    subject: "Physics",
    chapter: "Current Electricity",
    question: "In a Wheatstone bridge, the bridge is balanced when the resistances in the four arms are P, Q, R, S. The condition for balance is:",
    options: {
      A: "P + Q = R + S",
      B: "PQ = RS",
      C: "P/Q = R/S",
      D: "P/R = S/Q"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "For a balanced Wheatstone bridge, the ratio of resistances in adjacent arms must be equal: P/Q = R/S.",
      A: "Incorrect condition.",
      B: "Incorrect condition.",
      C: "Correct! This ensures no current flows through the galvanometer.",
      D: "Incorrect ratio."
    }
  },
  {
    id: "p17",
    subject: "Physics",
    chapter: "Magnetism",
    question: "A circular coil of radius R carries a current I. The magnetic field at the center of the coil is:",
    options: {
      A: "μ₀I / 2R",
      B: "μ₀I / 4R",
      C: "μ₀I / 2πR",
      D: "μ₀I / R"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The magnetic field at the center of a circular loop is given by B = μ₀I / 2R.",
      A: "Correct! Standard formula for center of a loop.",
      B: "Incorrect factor.",
      C: "This is the field due to a long straight wire.",
      D: "Incorrect factor."
    }
  },
  {
    id: "p18",
    subject: "Physics",
    chapter: "EMI",
    question: "The self-inductance of a solenoid is L. If the number of turns is doubled keeping other parameters constant, the new self-inductance will be:",
    options: {
      A: "2L",
      B: "4L",
      C: "L/2",
      D: "L/4"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "L = μ₀n²Al. Since L ∝ N², doubling the number of turns increases inductance by 4 times.",
      A: "Inductance depends on the square of the number of turns.",
      B: "Correct! L' ∝ (2N)² = 4N².",
      C: "Inductance increases with turns.",
      D: "Inductance increases with turns."
    }
  },
  {
    id: "p19",
    subject: "Physics",
    chapter: "AC Circuits",
    question: "In an LCR series circuit, resonance occurs when:",
    options: {
      A: "XL = XC",
      B: "XL = R",
      C: "XC = R",
      D: "XL + XC = R"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Resonance occurs when the inductive reactance equals the capacitive reactance, making the circuit purely resistive.",
      A: "Correct! This leads to maximum current in the circuit.",
      B: "Incorrect condition.",
      C: "Incorrect condition.",
      D: "Incorrect condition."
    }
  },
  {
    id: "p20",
    subject: "Physics",
    chapter: "Ray Optics",
    question: "The critical angle for a medium of refractive index √2 is:",
    options: {
      A: "30°",
      B: "45°",
      C: "60°",
      D: "90°"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "sin C = 1/n. sin C = 1/√2 => C = 45°.",
      A: "This would be for n=2.",
      B: "Correct! sin 45° = 1/√2.",
      C: "Incorrect value.",
      D: "Critical angle is always less than 90° for n > 1."
    }
  },
  {
    id: "p21",
    subject: "Physics",
    chapter: "Wave Optics",
    question: "In Young's Double Slit Experiment, if the distance between the slits is halved and the distance to the screen is doubled, the fringe width becomes:",
    options: {
      A: "Doubled",
      B: "Quadrupled",
      C: "Halved",
      D: "Unchanged"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "β = λD/d. If D becomes 2D and d becomes d/2, β' = λ(2D)/(d/2) = 4β.",
      A: "Both changes increase the fringe width.",
      B: "Correct! β' = 4 * (λD/d).",
      C: "Fringe width increases in this case.",
      D: "Fringe width changes."
    }
  },
  {
    id: "p22",
    subject: "Physics",
    chapter: "Dual Nature",
    question: "The stopping potential in a photoelectric experiment depends on:",
    options: {
      A: "Intensity of light",
      B: "Frequency of light",
      C: "Distance of source",
      D: "Time of exposure"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Stopping potential is proportional to the maximum kinetic energy of photoelectrons, which depends on the frequency of incident light (Einstein's equation).",
      A: "Intensity only affects the number of photoelectrons (current).",
      B: "Correct! Higher frequency means higher energy electrons, requiring more stopping potential.",
      C: "Distance only affects intensity.",
      D: "Photoelectric effect is instantaneous."
    }
  },
  {
    id: "p23",
    subject: "Physics",
    chapter: "Atoms",
    question: "The radius of the nth Bohr orbit of a hydrogen atom is proportional to:",
    options: {
      A: "n",
      B: "n²",
      C: "1/n",
      D: "1/n²"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "In Bohr's model, rₙ = a₀ * (n²/Z). For hydrogen (Z=1), rₙ ∝ n².",
      A: "Radius grows faster than n.",
      B: "Correct! Radius increases with the square of the principal quantum number.",
      C: "Radius increases with n.",
      D: "Radius increases with n."
    }
  },
  {
    id: "p24",
    subject: "Physics",
    chapter: "Nuclei",
    question: "The binding energy per nucleon is maximum for the nucleus:",
    options: {
      A: "⁴He",
      B: "⁵⁶Fe",
      C: "²³⁵U",
      D: "¹H"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Iron-56 has the highest binding energy per nucleon (~8.8 MeV), making it the most stable nucleus.",
      A: "Helium is stable but has lower B.E. than Iron.",
      B: "Correct! Iron is at the peak of the binding energy curve.",
      C: "Heavy nuclei like Uranium have lower B.E. per nucleon due to electrostatic repulsion.",
      D: "Hydrogen-1 has zero binding energy (single proton)."
    }
  },
  {
    id: "p25",
    subject: "Physics",
    chapter: "Semiconductors",
    question: "A p-n junction diode acts as a closed switch when it is:",
    options: {
      A: "Forward biased",
      B: "Reverse biased",
      C: "Unbiased",
      D: "Zero biased"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "In forward bias, the depletion layer narrows and resistance becomes very low, allowing current to flow (closed switch).",
      A: "Correct! Forward bias allows conduction.",
      B: "Reverse bias acts as an open switch (high resistance).",
      C: "Unbiased diode does not conduct.",
      D: "Same as unbiased."
    }
  },
  {
    id: "p26",
    subject: "Physics",
    chapter: "Communication Systems",
    question: "The range of an antenna of height h is proportional to:",
    options: {
      A: "h",
      B: "√h",
      C: "h²",
      D: "1/h"
    },
    correctAnswer: "B",
    yearsAsked: [2017, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The line-of-sight distance (range) is given by d = √(2Rh), where R is the radius of Earth. So d ∝ √h.",
      A: "Range increases slower than height.",
      B: "Correct! Range is proportional to the square root of antenna height.",
      C: "Incorrect scaling.",
      D: "Range increases with height."
    }
  },
  // CHEMISTRY (20 NEW QUESTIONS)
  {
    id: "c7",
    subject: "Chemistry",
    chapter: "Some Basic Concepts",
    question: "The number of atoms in 0.1 mole of a triatomic gas is: (Nₐ = 6.022 x 10²³)",
    options: {
      A: "6.022 x 10²²",
      B: "1.806 x 10²³",
      C: "3.612 x 10²³",
      D: "6.022 x 10²³"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Number of atoms = moles * Nₐ * atomicity. Atoms = 0.1 * 6.022 x 10²³ * 3 = 1.806 x 10²³.",
      A: "This is the number of molecules.",
      B: "Correct! Multiplied by atomicity (3) for a triatomic gas.",
      C: "Incorrect atomicity used.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "c8",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    question: "The maximum number of electrons in a subshell with l = 3 is:",
    options: {
      A: "6",
      B: "10",
      C: "14",
      D: "2"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Number of electrons = 2(2l + 1). For l = 3 (f-subshell), electrons = 2(2*3 + 1) = 2(7) = 14.",
      A: "This is for p-subshell (l=1).",
      B: "This is for d-subshell (l=2).",
      C: "Correct! f-subshell can hold 14 electrons.",
      D: "This is for s-subshell (l=0)."
    }
  },
  {
    id: "c9",
    subject: "Chemistry",
    chapter: "Classification of Elements",
    question: "Which of the following has the highest ionization enthalpy?",
    options: {
      A: "Nitrogen",
      B: "Oxygen",
      C: "Carbon",
      D: "Boron"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Nitrogen has a half-filled p-subshell (2p³), which provides extra stability. Thus, it has a higher ionization enthalpy than Oxygen.",
      A: "Correct! Half-filled stability makes it harder to remove an electron.",
      B: "Oxygen has lower I.E. than Nitrogen due to electron-electron repulsion in 2p⁴.",
      C: "I.E. generally increases across a period, so C < N.",
      D: "Boron has the lowest I.E. among these."
    }
  },
  {
    id: "c10",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    question: "The shape of SF₄ molecule is:",
    options: {
      A: "Tetrahedral",
      B: "Square planar",
      C: "See-saw",
      D: "Trigonal bipyramidal"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Sulfur has 6 valence electrons. In SF₄, there are 4 bond pairs and 1 lone pair (sp³d hybridization). The geometry is see-saw.",
      A: "Tetrahedral requires 4 bond pairs and 0 lone pairs.",
      B: "Square planar requires 4 bond pairs and 2 lone pairs.",
      C: "Correct! The lone pair occupies an equatorial position in the trigonal bipyramid.",
      D: "This is the electron geometry, not the molecular shape."
    }
  },
  {
    id: "c11",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    question: "For a spontaneous process at all temperatures:",
    options: {
      A: "ΔH > 0, ΔS > 0",
      B: "ΔH < 0, ΔS < 0",
      C: "ΔH < 0, ΔS > 0",
      D: "ΔH > 0, ΔS < 0"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "ΔG = ΔH - TΔS. For spontaneity, ΔG must be negative. If ΔH is negative (exothermic) and ΔS is positive (increasing disorder), ΔG is always negative.",
      A: "Spontaneous only at high temperatures.",
      B: "Spontaneous only at low temperatures.",
      C: "Correct! Exothermic with increasing entropy is always spontaneous.",
      D: "Never spontaneous."
    }
  },
  {
    id: "c12",
    subject: "Chemistry",
    chapter: "Equilibrium",
    question: "In the reaction N₂ + 3H₂ ⇌ 2NH₃ + Heat, the yield of ammonia increases with:",
    options: {
      A: "Increase in temperature",
      B: "Decrease in pressure",
      C: "Increase in pressure",
      D: "Addition of catalyst"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "According to Le Chatelier's principle, high pressure favors the side with fewer moles (product side). Low temperature favors exothermic reactions.",
      A: "High temperature favors the endothermic back reaction.",
      B: "Low pressure favors the side with more moles (reactants).",
      C: "Correct! 4 moles of reactant produce 2 moles of product.",
      D: "Catalyst only speeds up the rate, doesn't change the yield."
    }
  },
  {
    id: "c13",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    question: "The oxidation state of Chromium in K₂Cr₂O₇ is:",
    options: {
      A: "+3",
      B: "+5",
      C: "+6",
      D: "+7"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "2(+1) + 2x + 7(-2) = 0 => 2 + 2x - 14 = 0 => 2x = 12 => x = +6.",
      A: "This is the oxidation state of Cr in Cr₂O₃.",
      B: "Incorrect calculation.",
      C: "Correct! Chromium is in its highest oxidation state here.",
      D: "Manganese shows +7 in KMnO₄, but Cr max is +6."
    }
  },
  {
    id: "c14",
    subject: "Chemistry",
    chapter: "s-Block",
    question: "Which of the following alkali metals has the lowest melting point?",
    options: {
      A: "Lithium",
      B: "Sodium",
      C: "Potassium",
      D: "Cesium"
    },
    correctAnswer: "D",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Melting point decreases down the group for alkali metals as atomic size increases and metallic bonding weakens. Cesium has the lowest M.P.",
      A: "Lithium has the highest M.P. in the group.",
      B: "Sodium has higher M.P. than Cesium.",
      C: "Potassium has higher M.P. than Cesium.",
      D: "Correct! Cesium can even melt on a warm day."
    }
  },
  {
    id: "c15",
    subject: "Chemistry",
    chapter: "Organic Chemistry",
    question: "The IUPAC name of CH₃-CH(OH)-CH₂-CHO is:",
    options: {
      A: "3-hydroxybutanal",
      B: "2-hydroxybutanal",
      C: "3-hydroxybutanol",
      D: "4-hydroxybutanal"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2020, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The aldehyde group (-CHO) gets priority (C1). The OH group is at C3. Total 4 carbons = butanal.",
      A: "Correct! Functional group priority and numbering followed.",
      B: "Incorrect numbering.",
      C: "Incorrect suffix (should be -al for aldehyde).",
      D: "Incorrect numbering."
    }
  },
  {
    id: "c16",
    subject: "Chemistry",
    chapter: "Solid State",
    question: "The number of atoms per unit cell in a body-centered cubic (BCC) structure is:",
    options: {
      A: "1",
      B: "2",
      C: "4",
      D: "6"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2019, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "BCC has 8 corner atoms (8 * 1/8 = 1) and 1 center atom (1 * 1 = 1). Total = 2 atoms.",
      A: "This is for primitive (simple) cubic.",
      B: "Correct! One at center and shared corners.",
      C: "This is for face-centered cubic (FCC).",
      D: "Incorrect for cubic systems."
    }
  },
  {
    id: "c17",
    subject: "Chemistry",
    chapter: "Solutions",
    question: "The value of van't Hoff factor (i) for K₂SO₄ in dilute solution is:",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2017, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "K₂SO₄ dissociates into 2K⁺ and 1SO₄²⁻ ions. Total particles = 3. So i = 3 for complete dissociation.",
      A: "This is for non-electrolytes like glucose.",
      B: "This is for salts like NaCl.",
      C: "Correct! 2 cations + 1 anion.",
      D: "Incorrect dissociation logic."
    }
  },
  {
    id: "c18",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "According to Faraday's first law of electrolysis, the mass of substance deposited is proportional to:",
    options: {
      A: "Current",
      B: "Time",
      C: "Quantity of electricity",
      D: "Molar mass"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "m = ZQ = ZIt. The mass is directly proportional to the total charge (quantity of electricity) passed.",
      A: "Only true if time is constant.",
      B: "Only true if current is constant.",
      C: "Correct! m ∝ Q.",
      D: "Mass depends on equivalent weight, not just molar mass."
    }
  },
  {
    id: "c19",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    question: "The half-life of a first-order reaction is 10 minutes. The time required for 75% completion is:",
    options: {
      A: "15 min",
      B: "20 min",
      C: "30 min",
      D: "40 min"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2019, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "For first-order, t₇₅% = 2 * t₁/₂. So time = 2 * 10 = 20 minutes.",
      A: "Incorrect calculation.",
      B: "Correct! 75% completion means two half-lives have passed.",
      C: "This would be for 87.5% completion.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "c20",
    subject: "Chemistry",
    chapter: "Surface Chemistry",
    question: "The process of removing dissolved substances from a colloidal solution by means of diffusion through a membrane is:",
    options: {
      A: "Peptization",
      B: "Coagulation",
      C: "Dialysis",
      D: "Electrophoresis"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Dialysis is the purification of colloids where impurities diffuse through a semi-permeable membrane.",
      A: "Peptization is the conversion of precipitate into colloid.",
      B: "Coagulation is the settling of colloidal particles.",
      C: "Correct! Standard purification technique.",
      D: "Electrophoresis is the movement of particles in an electric field."
    }
  },
  {
    id: "c21",
    subject: "Chemistry",
    chapter: "p-Block",
    question: "Which of the following is the strongest acid?",
    options: {
      A: "HClO",
      B: "HClO₂",
      C: "HClO₃",
      D: "HClO₄"
    },
    correctAnswer: "D",
    yearsAsked: [2014, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Acidic strength of oxoacids increases with the oxidation state of the central atom. In HClO₄, Cl is in +7 state.",
      A: "Cl is in +1 state (weakest).",
      B: "Cl is in +3 state.",
      C: "Cl is in +5 state.",
      D: "Correct! Perchloric acid is one of the strongest known acids."
    }
  },
  {
    id: "c22",
    subject: "Chemistry",
    chapter: "d & f Block",
    question: "Lanthanoid contraction is due to:",
    options: {
      A: "Poor shielding of 4f electrons",
      B: "Effective shielding of 4f electrons",
      C: "Increase in nuclear charge",
      D: "Decrease in nuclear charge"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The 4f electrons have poor shielding effect, which fails to counteract the increasing nuclear charge, leading to a decrease in size.",
      A: "Correct! This is the fundamental cause of lanthanoid contraction.",
      B: "Shielding is actually very poor.",
      C: "Nuclear charge increases, but poor shielding is the specific reason for the contraction trend.",
      D: "Nuclear charge increases across the series."
    }
  },
  {
    id: "c23",
    subject: "Chemistry",
    chapter: "Haloalkanes",
    question: "Wurtz reaction is used to prepare:",
    options: {
      A: "Alkanes",
      B: "Alkenes",
      C: "Alkynes",
      D: "Alcohols"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2020, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Wurtz reaction involves the reaction of alkyl halides with sodium in dry ether to give higher alkanes.",
      A: "Correct! Specifically used for symmetrical alkanes.",
      B: "Incorrect product.",
      C: "Incorrect product.",
      D: "Incorrect product."
    }
  },
  {
    id: "c24",
    subject: "Chemistry",
    chapter: "Alcohols & Phenols",
    question: "Phenol is more acidic than ethanol because:",
    options: {
      A: "Phenoxide ion is resonance stabilized",
      B: "Ethoxide ion is resonance stabilized",
      C: "Phenol has higher molar mass",
      D: "Ethanol has hydrogen bonding"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2019, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The phenoxide ion formed after losing a proton is stabilized by resonance with the benzene ring, making phenol more acidic.",
      A: "Correct! Resonance stabilization of the conjugate base increases acidity.",
      B: "Ethoxide ion is not resonance stabilized.",
      C: "Molar mass doesn't determine acidity.",
      D: "Both have hydrogen bonding."
    }
  },
  {
    id: "c25",
    subject: "Chemistry",
    chapter: "Aldehydes & Ketones",
    question: "Which of the following does not give Fehling's test?",
    options: {
      A: "Formaldehyde",
      B: "Acetaldehyde",
      C: "Benzaldehyde",
      D: "Glucose"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Aromatic aldehydes like Benzaldehyde do not reduce Fehling's solution, although they reduce Tollen's reagent.",
      A: "Aliphatic aldehydes give positive Fehling's test.",
      B: "Aliphatic aldehydes give positive Fehling's test.",
      C: "Correct! Aromatic aldehydes are an exception to Fehling's test.",
      D: "Glucose is a reducing sugar and gives positive test."
    }
  },
  {
    id: "c26",
    subject: "Chemistry",
    chapter: "Biomolecules",
    question: "The linkage present in proteins is:",
    options: {
      A: "Glycosidic linkage",
      B: "Peptide linkage",
      C: "Phosphodiester linkage",
      D: "Ester linkage"
    },
    correctAnswer: "B",
    yearsAsked: [2017, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Proteins are polymers of amino acids joined by peptide bonds (-CO-NH-).",
      A: "This is found in carbohydrates.",
      B: "Correct! Also known as an amide bond.",
      C: "This is found in nucleic acids (DNA/RNA).",
      D: "This is found in lipids/fats."
    }
  },
  // MATH (20 NEW QUESTIONS)
  {
    id: "m7",
    subject: "Math",
    chapter: "Relations & Functions",
    question: "The domain of the function f(x) = √(x² - 4) is:",
    options: {
      A: "(-∞, -2] ∪ [2, ∞)",
      B: "[-2, 2]",
      C: "(-∞, 2]",
      D: "[2, ∞)"
    },
    correctAnswer: "A",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "For the square root to be defined, x² - 4 ≥ 0. (x - 2)(x + 2) ≥ 0. This holds for x ≤ -2 or x ≥ 2.",
      A: "Correct! The function is defined outside the interval (-2, 2).",
      B: "This is where x² - 4 ≤ 0.",
      C: "Incorrect interval.",
      D: "Missing the negative branch."
    }
  },
  {
    id: "m8",
    subject: "Math",
    chapter: "Trigonometric Functions",
    question: "The general solution of sin x = 1/2 is:",
    options: {
      A: "nπ + (-1)ⁿ π/6",
      B: "nπ + (-1)ⁿ π/3",
      C: "2nπ ± π/6",
      D: "nπ + π/6"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The principal value is α = π/6. The general solution for sin x = sin α is x = nπ + (-1)ⁿ α.",
      A: "Correct! Standard formula for sine equations.",
      B: "Incorrect principal value.",
      C: "This is the general solution for cosine.",
      D: "This is only for specific n."
    }
  },
  {
    id: "m9",
    subject: "Math",
    chapter: "Complex Numbers",
    question: "The argument of the complex number z = 1 + i√3 is:",
    options: {
      A: "π/6",
      B: "π/4",
      C: "π/3",
      D: "π/2"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "arg(z) = tan⁻¹(y/x) = tan⁻¹(√3/1) = π/3.",
      A: "This would be for √3 + i.",
      B: "This would be for 1 + i.",
      C: "Correct! tan 60° = √3.",
      D: "This would be for purely imaginary numbers."
    }
  },
  {
    id: "m10",
    subject: "Math",
    chapter: "Permutations & Combinations",
    question: "The number of ways to arrange the letters of the word 'APPLE' is:",
    options: {
      A: "120",
      B: "60",
      C: "24",
      D: "720"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Total letters = 5. 'P' is repeated twice. Ways = 5! / 2! = 120 / 2 = 60.",
      A: "Forgot to divide by the factorial of repeated letters.",
      B: "Correct! Accounted for the repetition of 'P'.",
      C: "Incorrect calculation.",
      D: "This is 6!."
    }
  },
  {
    id: "m11",
    subject: "Math",
    chapter: "Sequences & Series",
    question: "The sum of the first n odd natural numbers is:",
    options: {
      A: "n(n+1)/2",
      B: "n²",
      C: "n(n-1)/2",
      D: "2n - 1"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "The sequence is 1, 3, 5, ... (2n-1). Sum = (n/2)[2(1) + (n-1)2] = (n/2)[2n] = n².",
      A: "This is the sum of the first n natural numbers.",
      B: "Correct! Sum of first n odds is always a perfect square.",
      C: "Incorrect formula.",
      D: "This is the nth odd number, not the sum."
    }
  },
  {
    id: "m12",
    subject: "Math",
    chapter: "Straight Lines",
    question: "The distance between the parallel lines 3x + 4y + 5 = 0 and 3x + 4y + 15 = 0 is:",
    options: {
      A: "2 units",
      B: "10 units",
      C: "5 units",
      D: "1 unit"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Distance d = |c₁ - c₂| / √(a² + b²) = |15 - 5| / √(3² + 4²) = 10 / 5 = 2.",
      A: "Correct! Applied the formula for distance between parallel lines.",
      B: "Forgot to divide by √(a² + b²).",
      C: "Incorrect calculation.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "m13",
    subject: "Math",
    chapter: "Limits & Derivatives",
    question: "The value of lim (x→0) (tan x / x) is:",
    options: {
      A: "0",
      B: "1",
      C: "∞",
      D: "Not defined"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "lim (x→0) (tan x / x) = lim (x→0) (sin x / x) * (1 / cos x) = 1 * 1 = 1.",
      A: "Incorrect limit.",
      B: "Correct! This is a fundamental trigonometric limit.",
      C: "Incorrect limit.",
      D: "The limit exists and is 1."
    }
  },
  {
    id: "m14",
    subject: "Math",
    chapter: "Inverse Trigonometric Functions",
    question: "The principal value of cos⁻¹(-1/2) is:",
    options: {
      A: "π/3",
      B: "2π/3",
      C: "-π/3",
      D: "4π/3"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Range of cos⁻¹ is [0, π]. cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3.",
      A: "This is cos⁻¹(1/2).",
      B: "Correct! Within the principal value range.",
      C: "cos⁻¹ cannot be negative.",
      D: "Outside the principal value range."
    }
  },
  {
    id: "m15",
    subject: "Math",
    chapter: "Matrices",
    question: "If A is a 2x2 matrix such that A² = I, then A is called:",
    options: {
      A: "Idempotent matrix",
      B: "Involutory matrix",
      C: "Nilpotent matrix",
      D: "Orthogonal matrix"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "A matrix A such that A² = I is called an involutory matrix.",
      A: "Idempotent means A² = A.",
      B: "Correct! Standard definition.",
      C: "Nilpotent means Aⁿ = 0.",
      D: "Orthogonal means AAᵀ = I."
    }
  },
  {
    id: "m16",
    subject: "Math",
    chapter: "Determinants",
    question: "If the area of a triangle with vertices (2, -6), (5, 4) and (k, 4) is 35 sq units, then k is:",
    options: {
      A: "12",
      B: "-2",
      C: "12 or -2",
      D: "7"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2019, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Area = 1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|. 35 = 1/2 |2(0) + 5(4+6) + k(-6-4)|. 70 = |50 - 10k|. 50 - 10k = ±70. k = -2 or 12.",
      A: "Only one value found.",
      B: "Only one value found.",
      C: "Correct! Absolute value gives two possible solutions.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "m17",
    subject: "Math",
    chapter: "Continuity & Differentiability",
    question: "The derivative of log(sin x) with respect to x is:",
    options: {
      A: "tan x",
      B: "cot x",
      C: "1/sin x",
      D: "cos x"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "d/dx [log(sin x)] = (1/sin x) * d/dx(sin x) = cos x / sin x = cot x.",
      A: "This is the derivative of -log(cos x).",
      B: "Correct! Applied chain rule correctly.",
      C: "Forgot to multiply by derivative of inner function.",
      D: "Incorrect derivative."
    }
  },
  {
    id: "m18",
    subject: "Math",
    chapter: "Application of Derivatives",
    question: "The slope of the tangent to the curve y = x³ - x at x = 2 is:",
    options: {
      A: "11",
      B: "12",
      C: "10",
      D: "6"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "dy/dx = 3x² - 1. At x = 2, dy/dx = 3(2)² - 1 = 12 - 1 = 11.",
      A: "Correct! Slope of tangent is the derivative at that point.",
      B: "Forgot to subtract 1.",
      C: "Incorrect calculation.",
      D: "Incorrect derivative."
    }
  },
  {
    id: "m19",
    subject: "Math",
    chapter: "Integrals",
    question: "The value of ∫ (1 / (1 + x²)) dx is:",
    options: {
      A: "sin⁻¹ x + C",
      B: "tan⁻¹ x + C",
      C: "log(1 + x²) + C",
      D: "sec⁻¹ x + C"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2019, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "This is a standard integral formula: ∫ dx / (1 + x²) = tan⁻¹ x + C.",
      A: "This is the integral of 1/√(1-x²).",
      B: "Correct! Fundamental integration formula.",
      C: "This is the integral of 2x/(1+x²).",
      D: "Incorrect formula."
    }
  },
  {
    id: "m20",
    subject: "Math",
    chapter: "Application of Integrals",
    question: "The area of the region bounded by the curve y = x² and the line y = 4 is:",
    options: {
      A: "32/3",
      B: "16/3",
      C: "8/3",
      D: "4"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Area = 2 * ∫₀² (4 - x²) dx = 2 * [4x - x³/3]₀² = 2 * (8 - 8/3) = 2 * 16/3 = 32/3.",
      A: "Correct! Calculated the area between parabola and horizontal line.",
      B: "Only calculated half the area.",
      C: "Incorrect integral calculation.",
      D: "Incorrect calculation."
    }
  },
  {
    id: "m21",
    subject: "Math",
    chapter: "Differential Equations",
    question: "The integrating factor of the differential equation dy/dx + y/x = x² is:",
    options: {
      A: "log x",
      B: "eˣ",
      C: "x",
      D: "1/x"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2019, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "I.F. = e^(∫ P dx) = e^(∫ 1/x dx) = e^(log x) = x.",
      A: "Incorrect integration result.",
      B: "Incorrect formula.",
      C: "Correct! Applied the I.F. formula for linear equations.",
      D: "Incorrect integration result."
    }
  },
  {
    id: "m22",
    subject: "Math",
    chapter: "Vector Algebra",
    question: "If a and b are two perpendicular vectors, then a . b is:",
    options: {
      A: "1",
      B: "0",
      C: "|a||b|",
      D: "-1"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "a . b = |a||b| cos θ. For perpendicular vectors, θ = 90°, so cos 90° = 0. Thus a . b = 0.",
      A: "This is for parallel unit vectors.",
      B: "Correct! Dot product of orthogonal vectors is zero.",
      C: "This is for parallel vectors.",
      D: "This is for anti-parallel unit vectors."
    }
  },
  {
    id: "m23",
    subject: "Math",
    chapter: "3D Geometry",
    question: "The direction cosines of the z-axis are:",
    options: {
      A: "(1, 0, 0)",
      B: "(0, 1, 0)",
      C: "(0, 0, 1)",
      D: "(1, 1, 1)"
    },
    correctAnswer: "C",
    yearsAsked: [2016, 2020, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The z-axis makes 90° with x, 90° with y, and 0° with itself. cos 90° = 0, cos 0° = 1. So (0, 0, 1).",
      A: "These are D.C.s of x-axis.",
      B: "These are D.C.s of y-axis.",
      C: "Correct! Standard direction cosines for coordinate axes.",
      D: "Incorrect."
    }
  },
  {
    id: "m24",
    subject: "Math",
    chapter: "Probability",
    question: "If P(A) = 1/2, P(B) = 0, then P(A|B) is:",
    options: {
      A: "0",
      B: "1/2",
      C: "Not defined",
      D: "1"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "P(A|B) = P(A ∩ B) / P(B). Since P(B) = 0, the division is not defined.",
      A: "Cannot divide by zero.",
      B: "Incorrect logic.",
      C: "Correct! Conditional probability requires the condition to have non-zero probability.",
      D: "Incorrect logic."
    }
  },
  {
    id: "m25",
    subject: "Math",
    chapter: "Linear Programming",
    question: "The optimal value of the objective function in an LPP is attained at:",
    options: {
      A: "Any point in the feasible region",
      B: "Origin",
      C: "Corner points of the feasible region",
      D: "None of these"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "According to the Corner Point Theorem, the maximum or minimum value of the objective function occurs at the vertices (corner points) of the feasible region.",
      A: "Optimal value is usually at a boundary vertex.",
      B: "Only if origin is a corner point and gives the max/min.",
      C: "Correct! Fundamental theorem of LPP.",
      D: "Incorrect."
    }
  },
  {
    id: "m26",
    subject: "Math",
    chapter: "Statistics",
    question: "The variance of the first n natural numbers is:",
    options: {
      A: "(n² - 1) / 12",
      B: "(n² + 1) / 12",
      C: "n(n+1) / 2",
      D: "n² / 4"
    },
    correctAnswer: "A",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Variance σ² = Σx²/n - (Σx/n)². For first n natural numbers, this simplifies to (n² - 1) / 12.",
      A: "Correct! Standard formula for variance of first n integers.",
      B: "Incorrect sign.",
      C: "This is the sum.",
      D: "Incorrect formula."
    }
  },
  // BIOLOGY (20 NEW QUESTIONS)
  {
    id: "b5",
    subject: "Biology",
    chapter: "The Living World",
    question: "The basic unit of classification is:",
    options: {
      A: "Genus",
      B: "Species",
      C: "Order",
      D: "Family"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2018, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Species is the lowest and most basic taxonomic category, representing a group of organisms that can interbreed.",
      A: "Genus is a group of related species.",
      B: "Correct! Fundamental unit of taxonomy.",
      C: "Order is a higher category.",
      D: "Family is a group of related genera."
    }
  },
  {
    id: "b6",
    subject: "Biology",
    chapter: "Biological Classification",
    question: "Five kingdom classification was proposed by:",
    options: {
      A: "Linnaeus",
      B: "Whittaker",
      C: "Aristotle",
      D: "Haeckel"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "R.H. Whittaker proposed the five-kingdom classification (Monera, Protista, Fungi, Plantae, Animalia) in 1969.",
      A: "Linnaeus proposed the two-kingdom system.",
      B: "Correct! Most widely accepted classification system.",
      C: "Aristotle was the earliest to classify organisms.",
      D: "Haeckel proposed the three-kingdom system."
    }
  },
  {
    id: "b7",
    subject: "Biology",
    chapter: "Plant Kingdom",
    question: "The dominant phase in the life cycle of bryophytes is:",
    options: {
      A: "Sporophyte",
      B: "Gametophyte",
      C: "Zygote",
      D: "Spore"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "In bryophytes (mosses and liverworts), the main plant body is a haploid gametophyte, which is independent and photosynthetic.",
      A: "Sporophyte is dependent on the gametophyte in bryophytes.",
      B: "Correct! Gametophyte is the prominent phase.",
      C: "Zygote is a single cell, not a phase.",
      D: "Spore is a single cell."
    }
  },
  {
    id: "b8",
    subject: "Biology",
    chapter: "Animal Kingdom",
    question: "Water vascular system is a characteristic of:",
    options: {
      A: "Porifera",
      B: "Ctenophora",
      C: "Echinodermata",
      D: "Mollusca"
    },
    correctAnswer: "C",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Echinoderms (like starfish) possess a unique water vascular system used for locomotion, food capture, and respiration.",
      A: "Porifera have a water canal system.",
      B: "Ctenophora have comb plates.",
      C: "Correct! Unique to phylum Echinodermata.",
      D: "Mollusca have a mantle and radula."
    }
  },
  {
    id: "b9",
    subject: "Biology",
    chapter: "Morphology of Flowering Plants",
    question: "Pneumatophores are found in:",
    options: {
      A: "Hydrophytes",
      B: "Xerophytes",
      C: "Halophytes",
      D: "Epiphytes"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2017, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Halophytes (mangrove plants) growing in swampy areas have respiratory roots called pneumatophores that grow vertically upwards to get oxygen.",
      A: "Hydrophytes are aquatic plants.",
      B: "Xerophytes are desert plants.",
      C: "Correct! Rhizophora is a classic example.",
      D: "Epiphytes grow on other plants."
    }
  },
  {
    id: "b10",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    question: "The vascular bundles in dicot stems are:",
    options: {
      A: "Closed and scattered",
      B: "Open and arranged in a ring",
      C: "Closed and arranged in a ring",
      D: "Open and scattered"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2019, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Dicot stems have 'open' vascular bundles (with cambium) arranged in a characteristic ring pattern.",
      A: "This describes monocot stems.",
      B: "Correct! Ring arrangement is key for dicots.",
      C: "Closed bundles lack cambium.",
      D: "Incorrect combination."
    }
  },
  {
    id: "b11",
    subject: "Biology",
    chapter: "Cell: The Unit of Life",
    question: "Which organelle is known as the 'Powerhouse of the cell'?",
    options: {
      A: "Golgi apparatus",
      B: "Mitochondria",
      C: "Ribosomes",
      D: "Lysosomes"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Mitochondria are sites of aerobic respiration and produce ATP, the energy currency of the cell.",
      A: "Golgi is involved in packaging and secretion.",
      B: "Correct! Site of ATP synthesis.",
      C: "Ribosomes are sites of protein synthesis.",
      D: "Lysosomes are 'suicidal bags' containing digestive enzymes."
    }
  },
  {
    id: "b12",
    subject: "Biology",
    chapter: "Cell Cycle",
    question: "Crossing over occurs during which stage of Meiosis?",
    options: {
      A: "Leptotene",
      B: "Zygotene",
      C: "Pachytene",
      D: "Diplotene"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Crossing over (exchange of genetic material) between non-sister chromatids occurs during the Pachytene stage of Prophase I.",
      A: "Chromosomes become visible.",
      B: "Synapsis (pairing) occurs.",
      C: "Correct! Recombination nodules are formed here.",
      D: "Chiasmata become visible."
    }
  },
  {
    id: "b13",
    subject: "Biology",
    chapter: "Photosynthesis",
    question: "The first stable product of C₄ cycle is:",
    options: {
      A: "PGA",
      B: "OAA",
      C: "RuBP",
      D: "PEP"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "In C₄ plants, the first stable product is a 4-carbon compound, Oxaloacetic Acid (OAA).",
      A: "PGA is the first stable product of C₃ cycle.",
      B: "Correct! Hence the name C₄ cycle.",
      C: "RuBP is the CO₂ acceptor in C₃ cycle.",
      D: "PEP is the CO₂ acceptor in C₄ cycle."
    }
  },
  {
    id: "b14",
    subject: "Biology",
    chapter: "Respiration in Plants",
    question: "The net gain of ATP molecules during glycolysis is:",
    options: {
      A: "2",
      B: "4",
      C: "36",
      D: "38"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2019, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Glycolysis produces 4 ATPs but consumes 2 ATPs in the preparatory phase. Net gain = 4 - 2 = 2 ATP.",
      A: "Correct! Net energy yield from one glucose in cytoplasm.",
      B: "This is total ATP produced, not net gain.",
      C: "This is total yield from aerobic respiration.",
      D: "This is total yield from aerobic respiration."
    }
  },
  {
    id: "b15",
    subject: "Biology",
    chapter: "Plant Growth",
    question: "Which hormone is responsible for 'Apical Dominance'?",
    options: {
      A: "Gibberellin",
      B: "Auxin",
      C: "Cytokinin",
      D: "Ethylene"
    },
    correctAnswer: "B",
    yearsAsked: [2014, 2017, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Auxins produced in the apical bud inhibit the growth of lateral buds, a phenomenon called apical dominance.",
      A: "Gibberellins promote stem elongation.",
      B: "Correct! Removing the tip removes this inhibition.",
      C: "Cytokinins promote lateral bud growth (counteract auxins).",
      D: "Ethylene is a ripening hormone."
    }
  },
  {
    id: "b16",
    subject: "Biology",
    chapter: "Body Fluids & Circulation",
    question: "The 'Pacemaker' of the human heart is:",
    options: {
      A: "AV Node",
      B: "SA Node",
      C: "Purkinje fibers",
      D: "Bundle of His"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The Sino-atrial (SA) node generates action potentials at the highest rate, initiating the heartbeat.",
      A: "AV node is the 'Pacesetter'.",
      B: "Correct! Located in the right atrium.",
      C: "These conduct impulses to ventricles.",
      D: "Part of the conduction system."
    }
  },
  {
    id: "b17",
    subject: "Biology",
    chapter: "Excretory Products",
    question: "The structural and functional unit of the kidney is:",
    options: {
      A: "Neuron",
      B: "Nephron",
      C: "Alveoli",
      D: "Hepatic lobule"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2019, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Each human kidney contains nearly one million complex tubular structures called nephrons.",
      A: "Neuron is the unit of the nervous system.",
      B: "Correct! Responsible for urine formation.",
      C: "Alveoli are units of the respiratory system.",
      D: "Hepatic lobule is the unit of the liver."
    }
  },
  {
    id: "b18",
    subject: "Biology",
    chapter: "Neural Control",
    question: "The gap between two neurons is called:",
    options: {
      A: "Dendrite",
      B: "Synapse",
      C: "Axon",
      D: "Myelin sheath"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "A synapse is a junction between two neurons where impulses are transmitted via neurotransmitters.",
      A: "Dendrites receive signals.",
      B: "Correct! Can be electrical or chemical.",
      C: "Axon carries signals away from cell body.",
      D: "Insulating layer around axons."
    }
  },
  {
    id: "b19",
    subject: "Biology",
    chapter: "Human Reproduction",
    question: "The process of release of ovum from a mature follicle is called:",
    options: {
      A: "Ovulation",
      B: "Implantation",
      C: "Fertilization",
      D: "Parturition"
    },
    correctAnswer: "A",
    yearsAsked: [2014, 2019, 2021],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Ovulation is the release of the secondary oocyte from the Graafian follicle, usually triggered by LH surge.",
      A: "Correct! Occurs around day 14 of the cycle.",
      B: "Attachment of embryo to uterus.",
      C: "Fusion of sperm and egg.",
      D: "Process of giving birth."
    }
  },
  {
    id: "b20",
    subject: "Biology",
    chapter: "Molecular Basis of Inheritance",
    question: "The 'Central Dogma' of molecular biology is:",
    options: {
      A: "DNA → RNA → Protein",
      B: "RNA → DNA → Protein",
      C: "Protein → RNA → DNA",
      D: "DNA → Protein → RNA"
    },
    correctAnswer: "A",
    yearsAsked: [2015, 2018, 2022],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Proposed by Francis Crick, it states that genetic information flows from DNA to RNA (transcription) and then to Protein (translation).",
      A: "Correct! The universal flow of genetic info.",
      B: "This is reverse transcription (found in some viruses).",
      C: "Incorrect flow.",
      D: "Incorrect flow."
    }
  },
  {
    id: "b21",
    subject: "Biology",
    chapter: "Biotechnology",
    question: "The 'Molecular Scissors' used in genetic engineering are:",
    options: {
      A: "DNA Ligases",
      B: "Restriction Endonucleases",
      C: "Polymerases",
      D: "Reverse Transcriptases"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Restriction enzymes cut DNA at specific palindromic sequences, allowing precise manipulation of genes.",
      A: "Ligases are 'molecular glue' that join DNA fragments.",
      B: "Correct! Essential tool for recombinant DNA tech.",
      C: "Polymerases synthesize new DNA strands.",
      D: "Convert RNA to DNA."
    }
  },
  {
    id: "b22",
    subject: "Biology",
    chapter: "Ecosystem",
    question: "The pyramid of energy is always:",
    options: {
      A: "Inverted",
      B: "Upright",
      C: "Spindle shaped",
      D: "Urn shaped"
    },
    correctAnswer: "B",
    yearsAsked: [2015, 2018, 2021],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "Energy is lost as heat at each trophic level (10% law), so the energy available always decreases as we move up.",
      A: "Pyramids of biomass or numbers can be inverted, but not energy.",
      B: "Correct! Never inverted in any ecosystem.",
      C: "Incorrect shape.",
      D: "Incorrect shape."
    }
  },
  {
    id: "b23",
    subject: "Biology",
    chapter: "Biodiversity",
    question: "Which of the following is an 'Ex-situ' conservation method?",
    options: {
      A: "National Park",
      B: "Wildlife Sanctuary",
      C: "Zoological Park",
      D: "Biosphere Reserve"
    },
    correctAnswer: "C",
    yearsAsked: [2014, 2019, 2022],
    tag: ["⭐ Important"],
    explanation: {
      correct: "Ex-situ conservation involves protecting species outside their natural habitats (e.g., zoos, botanical gardens, seed banks).",
      A: "In-situ (on-site) conservation.",
      B: "In-situ (on-site) conservation.",
      C: "Correct! Off-site conservation.",
      D: "In-situ (on-site) conservation."
    }
  },
  {
    id: "b24",
    subject: "Biology",
    chapter: "Environmental Issues",
    question: "The 'Montreal Protocol' was signed to control:",
    options: {
      A: "Global warming",
      B: "Ozone depletion",
      C: "Water pollution",
      D: "Deforestation"
    },
    correctAnswer: "B",
    yearsAsked: [2016, 2020, 2023],
    tag: ["🔥 Repeated"],
    explanation: {
      correct: "The Montreal Protocol (1987) is an international treaty designed to protect the ozone layer by phasing out ODS like CFCs.",
      A: "Kyoto Protocol deals with greenhouse gases.",
      B: "Correct! Specifically targets ozone-depleting substances.",
      C: "Incorrect.",
      D: "Incorrect."
    }
  }
];
