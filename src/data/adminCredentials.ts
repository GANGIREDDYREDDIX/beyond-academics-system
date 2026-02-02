// Admin credentials for different panels
// In production, this should be stored securely in a database with hashed passwords

export interface AdminCredential {
  username: string;
  password: string;
  role: string;
  level: string;
  department?: string;
  school?: string;
  fullName: string;
  email: string;
  permissions: string[];
}

export const ADMIN_CREDENTIALS: AdminCredential[] = [
  // HOD Level (Level 1)
  {
    username: "hod_cse",
    password: "HOD@CSE2026",
    role: "HOD",
    level: "Level 1",
    department: "Computer Science and Engineering",
    school: "Computer Science and Engineering",
    fullName: "Dr. Rajeev Sobti",
    email: "rajeev.sobti@lpu.in",
    permissions: ["view_department_submissions", "approve_hod", "reject_hod", "add_comments"],
  },
  {
    username: "hod_business",
    password: "HOD@BUS2026",
    role: "HOD",
    level: "Level 1",
    department: "Business Administration",
    school: "Business",
    fullName: "Dr. Priya Malhotra",
    email: "priya.malhotra@lpu.in",
    permissions: ["view_department_submissions", "approve_hod", "reject_hod", "add_comments"],
  },
  {
    username: "hod_mechanical",
    password: "HOD@MECH2026",
    role: "HOD",
    level: "Level 1",
    department: "Mechanical Engineering",
    school: "Mechanical Engineering",
    fullName: "Dr. Amit Kumar",
    email: "amit.kumar@lpu.in",
    permissions: ["view_department_submissions", "approve_hod", "reject_hod", "add_comments"],
  },
  {
    username: "hod_civil",
    password: "HOD@CIVIL2026",
    role: "HOD",
    level: "Level 1",
    department: "Civil Engineering",
    school: "Civil Engineering",
    fullName: "Dr. Suresh Patel",
    email: "suresh.patel@lpu.in",
    permissions: ["view_department_submissions", "approve_hod", "reject_hod", "add_comments"],
  },

  // HOS Level (Level 2)
  {
    username: "hos_cse",
    password: "HOS@CSE2026",
    role: "HOS",
    level: "Level 2",
    school: "Computer Science and Engineering",
    fullName: "Dean, School of CSE",
    email: "dean.cse@lpu.in",
    permissions: [
      "view_school_submissions",
      "approve_hos",
      "reject_hos",
      "assign_benefits",
      "add_comments",
      "view_department_stats",
    ],
  },
  {
    username: "hos_business",
    password: "HOS@BUS2026",
    role: "HOS",
    level: "Level 2",
    school: "Business",
    fullName: "Dean, Business School",
    email: "dean.business@lpu.in",
    permissions: [
      "view_school_submissions",
      "approve_hos",
      "reject_hos",
      "assign_benefits",
      "add_comments",
      "view_department_stats",
    ],
  },
  {
    username: "hos_engineering",
    password: "HOS@ENG2026",
    role: "HOS",
    level: "Level 2",
    school: "Engineering",
    fullName: "Dean, School of Engineering",
    email: "dean.engineering@lpu.in",
    permissions: [
      "view_school_submissions",
      "approve_hos",
      "reject_hos",
      "assign_benefits",
      "add_comments",
      "view_department_stats",
    ],
  },

  // Academic Affairs Level (Level 3)
  {
    username: "academic_affairs",
    password: "ACAD@AFFAIRS2026",
    role: "Academic Affairs Officer",
    level: "Level 3",
    fullName: "Dr. Rajesh Sharma",
    email: "rajesh.sharma@lpu.in",
    permissions: [
      "view_all_submissions",
      "approve_academic",
      "reject_academic",
      "verify_policy",
      "view_school_stats",
      "add_comments",
    ],
  },
  {
    username: "academic_affairs2",
    password: "ACAD@AFFAIRS2026",
    role: "Academic Affairs Officer",
    level: "Level 3",
    fullName: "Dr. Neha Gupta",
    email: "neha.gupta@lpu.in",
    permissions: [
      "view_all_submissions",
      "approve_academic",
      "reject_academic",
      "verify_policy",
      "view_school_stats",
      "add_comments",
    ],
  },

  // Examination Level (Level 4)
  {
    username: "exam_dept",
    password: "EXAM@DEPT2026",
    role: "Examination Officer",
    level: "Level 4",
    fullName: "Dr. Vikram Singh",
    email: "vikram.singh@lpu.in",
    permissions: [
      "view_all_submissions",
      "approve_exam",
      "reject_exam",
      "update_records",
      "issue_certificates",
      "release_scholarships",
      "add_comments",
    ],
  },
  {
    username: "exam_dept2",
    password: "EXAM@DEPT2026",
    role: "Examination Officer",
    level: "Level 4",
    fullName: "Ms. Anjali Verma",
    email: "anjali.verma@lpu.in",
    permissions: [
      "view_all_submissions",
      "approve_exam",
      "reject_exam",
      "update_records",
      "issue_certificates",
      "release_scholarships",
      "add_comments",
    ],
  },

  // Management Level (Executive/Monitoring)
  {
    username: "management",
    password: "MGMT@LPU2026",
    role: "Management Executive",
    level: "Management",
    fullName: "Prof. Ashok Mittal",
    email: "ashok.mittal@lpu.in",
    permissions: [
      "view_all_submissions",
      "view_all_analytics",
      "view_all_reports",
      "monitor_system",
      "export_reports",
      "view_all_stats",
    ],
  },
  {
    username: "admin",
    password: "ADMIN@LPU2026",
    role: "System Administrator",
    level: "Management",
    fullName: "System Admin",
    email: "admin@lpu.in",
    permissions: [
      "full_access",
      "view_all_submissions",
      "view_all_analytics",
      "manage_users",
      "system_settings",
    ],
  },

  // Super Admin Level
  {
    username: "superadmin",
    password: "SUPER@ADMIN2026",
    role: "Super Administrator",
    level: "Super Admin",
    fullName: "Super Admin",
    email: "superadmin@lpu.in",
    permissions: [
      "full_access",
      "manage_users",
      "manage_admins",
      "system_settings",
      "security_config",
      "database_management",
      "view_all_logs",
      "backup_restore",
    ],
  },
];

// Helper function to authenticate admin
export const authenticateAdmin = (
  username: string,
  password: string
): AdminCredential | null => {
  const admin = ADMIN_CREDENTIALS.find(
    (cred) => cred.username === username && cred.password === password
  );
  return admin || null;
};

// Helper function to get admin by username
export const getAdminByUsername = (username: string): AdminCredential | null => {
  const admin = ADMIN_CREDENTIALS.find((cred) => cred.username === username);
  return admin || null;
};

// Helper function to check if user has permission
export const hasPermission = (admin: AdminCredential, permission: string): boolean => {
  return (
    admin.permissions.includes("full_access") ||
    admin.permissions.includes(permission)
  );
};

// Helper function to get panel route by role
export const getPanelRouteByRole = (role: string): string => {
  switch (role) {
    case "HOD":
      return "/admin/hod";
    case "HOS":
      return "/admin/hos";
    case "Academic Affairs Officer":
      return "/admin/academic-affairs";
    case "Examination Officer":
      return "/admin/examination";
    case "Management Executive":
    case "System Administrator":
      return "/admin/management";
    case "Super Administrator":
      return "/admin/super";
    default:
      return "/admin";
  }
};

// Quick reference guide
export const ADMIN_CREDENTIALS_GUIDE = {
  "Level 1 - HOD": [
    { username: "hod_cse", password: "HOD@CSE2026", department: "CSE" },
    { username: "hod_business", password: "HOD@BUS2026", department: "Business" },
    { username: "hod_mechanical", password: "HOD@MECH2026", department: "Mechanical" },
    { username: "hod_civil", password: "HOD@CIVIL2026", department: "Civil" },
  ],
  "Level 2 - HOS": [
    { username: "hos_cse", password: "HOS@CSE2026", school: "CSE" },
    { username: "hos_business", password: "HOS@BUS2026", school: "Business" },
    { username: "hos_engineering", password: "HOS@ENG2026", school: "Engineering" },
  ],
  "Level 3 - Academic Affairs": [
    { username: "academic_affairs", password: "ACAD@AFFAIRS2026" },
    { username: "academic_affairs2", password: "ACAD@AFFAIRS2026" },
  ],
  "Level 4 - Examination": [
    { username: "exam_dept", password: "EXAM@DEPT2026" },
    { username: "exam_dept2", password: "EXAM@DEPT2026" },
  ],
  "Management": [
    { username: "management", password: "MGMT@LPU2026" },
    { username: "admin", password: "ADMIN@LPU2026" },
  ],
  "Super Admin": [
    { username: "superadmin", password: "SUPER@ADMIN2026" },
  ],
};
