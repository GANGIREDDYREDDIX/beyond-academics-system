// Beyond Academics Points Distribution System
// Based on official achievement evaluation criteria

export interface PointsConfig {
  code: string;
  level: string;
  achievement: string;
  zonalPoints: number;
  nationalPoints?: number;
}

export const POINTS_SYSTEM: PointsConfig[] = [
  // School Level (A1-A5)
  { code: "A1", level: "School level", achievement: "Participation", zonalPoints: 3, nationalPoints: undefined },
  { code: "A2", level: "School level", achievement: "Category Award/2nd runner up", zonalPoints: 6, nationalPoints: undefined },
  { code: "A3", level: "School level", achievement: "1st runner up", zonalPoints: 8, nationalPoints: undefined },
  { code: "A4", level: "School level", achievement: "Merit/Winner", zonalPoints: 10, nationalPoints: undefined },
  { code: "A5", level: "School level", achievement: "Overall", zonalPoints: 12, nationalPoints: undefined },

  // University Level (B1-B5)
  { code: "B1", level: "University level", achievement: "Participation", zonalPoints: 8, nationalPoints: undefined },
  { code: "B2", level: "University level", achievement: "Category Award/2nd runner up", zonalPoints: 15, nationalPoints: undefined },
  { code: "B3", level: "University level", achievement: "1st runner up", zonalPoints: 18, nationalPoints: undefined },
  { code: "B4", level: "University level", achievement: "Merit/Winner", zonalPoints: 20, nationalPoints: undefined },
  { code: "B5", level: "University level", achievement: "Overall", zonalPoints: 25, nationalPoints: undefined },

  // Off Campus - Private Universities (C1-C5)
  { code: "C1", level: "Off campus - Pvt. Universities", achievement: "Participation", zonalPoints: 8, nationalPoints: undefined },
  { code: "C2", level: "Off campus - Pvt. Universities", achievement: "Category Award/2nd runner up", zonalPoints: 12, nationalPoints: undefined },
  { code: "C3", level: "Off campus - Pvt. Universities", achievement: "1st runner up", zonalPoints: 14, nationalPoints: undefined },
  { code: "C4", level: "Off campus - Pvt. Universities", achievement: "Merit/Winner", zonalPoints: 18, nationalPoints: undefined },
  { code: "C5", level: "Off campus - Pvt. Universities", achievement: "Overall", zonalPoints: 20, nationalPoints: undefined },

  // Off Campus - Institute of Premier (D1-D5)
  { code: "D1", level: "Off campus - Institute of Premier", achievement: "Participation", zonalPoints: 10, nationalPoints: undefined },
  { code: "D2", level: "Off campus - Institute of Premier", achievement: "Category Award/2nd runner up", zonalPoints: 30, nationalPoints: undefined },
  { code: "D3", level: "Off campus - Institute of Premier", achievement: "1st runner up", zonalPoints: 35, nationalPoints: undefined },
  { code: "D4", level: "Off campus - Institute of Premier", achievement: "Merit/Winner", zonalPoints: 41, nationalPoints: undefined },
  { code: "D5", level: "Off campus - Institute of Premier", achievement: "Overall", zonalPoints: 45, nationalPoints: undefined },

  // Off Campus - Open National Competitions (E1-E5)
  { code: "E1", level: "Off campus - Open national Competitions (SIE etc)", achievement: "Participation", zonalPoints: 15, nationalPoints: undefined },
  { code: "E2", level: "Off campus - Open national Competitions (SIE etc)", achievement: "Category Award/2nd runner up", zonalPoints: 30, nationalPoints: undefined },
  { code: "E3", level: "Off campus - Open national Competitions (SIE etc)", achievement: "1st runner up", zonalPoints: 35, nationalPoints: undefined },
  { code: "E4", level: "Off campus - Open national Competitions (SIE etc)", achievement: "Merit/Winner", zonalPoints: 41, nationalPoints: undefined },
  { code: "E5", level: "Off campus - Open national Competitions (SIE etc)", achievement: "Overall", zonalPoints: 45, nationalPoints: undefined },

  // Off Campus - Open International Competitions (EI1-EI5)
  { code: "EI1", level: "Off campus - Open International Competitions (World Robotics championship etc)", achievement: "Participation", zonalPoints: 20, nationalPoints: undefined },
  { code: "EI2", level: "Off campus - Open International Competitions (World Robotics championship etc)", achievement: "Category Award/2nd runner up", zonalPoints: 35, nationalPoints: undefined },
  { code: "EI3", level: "Off campus - Open International Competitions (World Robotics championship etc)", achievement: "1st runner up", zonalPoints: 38, nationalPoints: undefined },
  { code: "EI4", level: "Off campus - Open International Competitions (World Robotics championship etc)", achievement: "Merit/Winner", zonalPoints: 41, nationalPoints: undefined },
  { code: "EI5", level: "Off campus - Open International Competitions (World Robotics championship etc)", achievement: "Overall", zonalPoints: 42, nationalPoints: undefined },

  // Off Campus - Govt. State Agencies (F1-F5)
  { code: "F1", level: "Off campus - Govt. State agencies", achievement: "Participation", zonalPoints: 15, nationalPoints: undefined },
  { code: "F2", level: "Off campus - Govt. State agencies", achievement: "Category Award/2nd runner up", zonalPoints: 30, nationalPoints: undefined },
  { code: "F3", level: "Off campus - Govt. State agencies", achievement: "1st runner up", zonalPoints: 35, nationalPoints: undefined },
  { code: "F4", level: "Off campus - Govt. State agencies", achievement: "Merit/Winner", zonalPoints: 40, nationalPoints: undefined },
  { code: "F5", level: "Off campus - Govt. State agencies", achievement: "Overall", zonalPoints: 40, nationalPoints: undefined },

  // Off Campus - National Govt Agencies (G1-G5, GF1-GF5)
  { code: "G1, GF1", level: "Off campus - National Govt Agencies/ Organisations and ministries", achievement: "Participation", zonalPoints: 30, nationalPoints: 50 },
  { code: "G2, GF2", level: "Off campus - National Govt Agencies/ Organisations and ministries", achievement: "Category Award/2nd runner up", zonalPoints: 50, nationalPoints: 70 },
  { code: "G3, GF3", level: "Off campus - National Govt Agencies/ Organisations and ministries", achievement: "1st runner up", zonalPoints: 65, nationalPoints: 75 },
  { code: "G4, GF4", level: "Off campus - National Govt Agencies/ Organisations and ministries", achievement: "Merit/Winner", zonalPoints: 60, nationalPoints: 85 },
  { code: "G5, GF5", level: "Off campus - National Govt Agencies/ Organisations and ministries", achievement: "Overall", zonalPoints: 70, nationalPoints: 95 },

  // Off Campus - Mentored Projects (HZ1-HZ5, HN1-HN5)
  { code: "HZ1, HN1", level: "Off campus - Mentored Projects", achievement: "Participation", zonalPoints: 40, nationalPoints: 50 },
  { code: "HZ2, HN2", level: "Off campus - Mentored Projects", achievement: "Category Award/2nd runner up", zonalPoints: 60, nationalPoints: 75 },
  { code: "HZ3, HN3", level: "Off campus - Mentored Projects", achievement: "1st runner up", zonalPoints: 75, nationalPoints: 80 },
  { code: "HZ4, HN4", level: "Off campus - Mentored Projects", achievement: "Merit/Winner", zonalPoints: 70, nationalPoints: 85 },
  { code: "HZ5, HN5", level: "Off campus - Mentored Projects", achievement: "Overall", zonalPoints: 80, nationalPoints: 95 },

  // International Competition (I1-I5, IF1-IF5)
  { code: "I1, IF1", level: "International Competition (of international importance or as per separate approval) at any International Platform", achievement: "Participation", zonalPoints: 30, nationalPoints: 60 },
  { code: "I2, IF2", level: "International Competition (of international importance or as per separate approval) at any International Platform", achievement: "Category Award/2nd runner up", zonalPoints: 50, nationalPoints: 70 },
  { code: "I3, IF3", level: "International Competition (of international importance or as per separate approval) at any International Platform", achievement: "Category Award/2nd runner up", zonalPoints: 65, nationalPoints: 75 },
  { code: "I4, IF4", level: "International Competition (of international importance or as per separate approval) at any International Platform", achievement: "Merit/Winner", zonalPoints: 60, nationalPoints: 80 },
  { code: "I5, IF5", level: "International Competition (of international importance or as per separate approval) at any International Platform", achievement: "Overall", zonalPoints: 70, nationalPoints: 90 },

  // University Facelift Projects (J1)
  { code: "J1", level: "University Facelift Projects", achievement: "Successful completion and Installation", zonalPoints: 95, nationalPoints: undefined },

  // Industrial Consultancy Projects (K1)
  { code: "K1", level: "Industrial Consultancy Projects", achievement: "Completion certificate from Industry", zonalPoints: 90, nationalPoints: undefined },

  // Student Research Project/IPR (L1-L4)
  { code: "L1", level: "Student Research Project/IPR", achievement: "TRL level 3", zonalPoints: 10, nationalPoints: undefined },
  { code: "L2", level: "Student Research Project/IPR", achievement: "TRL level 4-6", zonalPoints: 40, nationalPoints: undefined },
  { code: "L3", level: "Student Research Project/IPR", achievement: "TRL level 7-8", zonalPoints: 80, nationalPoints: undefined },
  { code: "L4", level: "Student Research Project/IPR", achievement: "Commercialize/Tech transfer", zonalPoints: 100, nationalPoints: undefined },

  // Grass Root Level Projects (M1-M3)
  { code: "M1", level: "Grass root level Projects", achievement: "Relevant workshops attended for 30 hrs", zonalPoints: 10, nationalPoints: undefined },
  { code: "M2", level: "Grass root level Projects", achievement: "Worked as team fellow in other projects", zonalPoints: 15, nationalPoints: undefined },
  { code: "M3", level: "Grass root level Projects", achievement: "Project lead/mentor", zonalPoints: 20, nationalPoints: undefined },
];

export const COMPETITION_LEVELS = [
  { value: "school", label: "School Level", codes: ["A1", "A2", "A3", "A4", "A5"] },
  { value: "university", label: "University Level", codes: ["B1", "B2", "B3", "B4", "B5"] },
  { value: "private-university", label: "Private Universities", codes: ["C1", "C2", "C3", "C4", "C5"] },
  { value: "premier-institute", label: "Institute of Premier", codes: ["D1", "D2", "D3", "D4", "D5"] },
  { value: "open-national", label: "Open National (SIE etc)", codes: ["E1", "E2", "E3", "E4", "E5"] },
  { value: "open-international", label: "Open International", codes: ["EI1", "EI2", "EI3", "EI4", "EI5"] },
  { value: "govt-state", label: "Govt. State Agencies", codes: ["F1", "F2", "F3", "F4", "F5"] },
  { value: "govt-national", label: "National Govt Agencies", codes: ["G1, GF1", "G2, GF2", "G3, GF3", "G4, GF4", "G5, GF5"] },
  { value: "mentored-projects", label: "Mentored Projects", codes: ["HZ1, HN1", "HZ2, HN2", "HZ3, HN3", "HZ4, HN4", "HZ5, HN5"] },
  { value: "international-platform", label: "International Platform", codes: ["I1, IF1", "I2, IF2", "I3, IF3", "I4, IF4", "I5, IF5"] },
];

export const ACHIEVEMENT_RANKS = [
  { value: "participation", label: "Participation" },
  { value: "category-award", label: "Category Award/2nd Runner Up" },
  { value: "first-runner", label: "1st Runner Up" },
  { value: "winner", label: "Merit/Winner" },
  { value: "overall", label: "Overall" },
];

export const SPECIAL_CATEGORIES = [
  { value: "facelift", label: "University Facelift Projects", code: "J1", points: 95 },
  { value: "consultancy", label: "Industrial Consultancy Projects", code: "K1", points: 90 },
  { value: "research-trl3", label: "Student Research - TRL Level 3", code: "L1", points: 10 },
  { value: "research-trl46", label: "Student Research - TRL Level 4-6", code: "L2", points: 40 },
  { value: "research-trl78", label: "Student Research - TRL Level 7-8", code: "L3", points: 80 },
  { value: "research-commercial", label: "Student Research - Commercialize/Tech Transfer", code: "L4", points: 100 },
  { value: "grassroot-workshop", label: "Grass Root - Workshops (30 hrs)", code: "M1", points: 10 },
  { value: "grassroot-fellow", label: "Grass Root - Team Fellow", code: "M2", points: 15 },
  { value: "grassroot-lead", label: "Grass Root - Project Lead/Mentor", code: "M3", points: 20 },
];

export function calculatePoints(
  level: string,
  rank: string,
  scope: "zonal" | "national" = "zonal"
): { points: number; code: string } | null {
  const rankMap: Record<string, string> = {
    "participation": "Participation",
    "category-award": "Category Award/2nd runner up",
    "first-runner": "1st runner up",
    "winner": "Merit/Winner",
    "overall": "Overall",
  };

  const achievementType = rankMap[rank];
  if (!achievementType) return null;

  const config = POINTS_SYSTEM.find(
    (item) =>
      item.level.toLowerCase().includes(level.toLowerCase()) &&
      item.achievement === achievementType
  );

  if (!config) return null;

  const points = scope === "national" && config.nationalPoints !== undefined
    ? config.nationalPoints
    : config.zonalPoints;

  return { points, code: config.code };
}

export function getPointsByCode(code: string): number | null {
  const config = POINTS_SYSTEM.find((item) => item.code === code);
  return config ? config.zonalPoints : null;
}
