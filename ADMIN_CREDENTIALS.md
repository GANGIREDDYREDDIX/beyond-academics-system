# Admin Panel Credentials

## Overview
This document contains all usernames and passwords for the 5-level admin panel system.

⚠️ **IMPORTANT**: These are demo credentials for development/testing purposes only. In production, implement proper authentication with hashed passwords and secure session management.

---

## Level 1: Head of Department (HOD)

Department-specific achievement verification and initial approval.

### Computer Science & Engineering
- **Username**: `hod_cse`
- **Password**: `HOD@CSE2026`
- **Name**: Dr. Rajeev Sobti
- **Email**: rajeev.sobti@lpu.in

### Business Administration
- **Username**: `hod_business`
- **Password**: `HOD@BUS2026`
- **Name**: Dr. Priya Malhotra
- **Email**: priya.malhotra@lpu.in

### Mechanical Engineering
- **Username**: `hod_mechanical`
- **Password**: `HOD@MECH2026`
- **Name**: Dr. Amit Kumar
- **Email**: amit.kumar@lpu.in

### Civil Engineering
- **Username**: `hod_civil`
- **Password**: `HOD@CIVIL2026`
- **Name**: Dr. Suresh Patel
- **Email**: suresh.patel@lpu.in

---

## Level 2: Head of School (HOS)

School-wide review and benefits assignment.

### School of Computer Science & Engineering
- **Username**: `hos_cse`
- **Password**: `HOS@CSE2026`
- **Name**: Dean, School of CSE
- **Email**: dean.cse@lpu.in

### Business School
- **Username**: `hos_business`
- **Password**: `HOS@BUS2026`
- **Name**: Dean, Business School
- **Email**: dean.business@lpu.in

### School of Engineering
- **Username**: `hos_engineering`
- **Password**: `HOS@ENG2026`
- **Name**: Dean, School of Engineering
- **Email**: dean.engineering@lpu.in

---

## Level 3: Academic Affairs

University-wide policy compliance and benefit verification.

### Officer 1
- **Username**: `academic_affairs`
- **Password**: `ACAD@AFFAIRS2026`
- **Name**: Dr. Rajesh Sharma
- **Email**: rajesh.sharma@lpu.in

### Officer 2
- **Username**: `academic_affairs2`
- **Password**: `ACAD@AFFAIRS2026`
- **Name**: Dr. Neha Gupta
- **Email**: neha.gupta@lpu.in

---

## Level 4: Examination Department

Final validation and official record management.

### Officer 1
- **Username**: `exam_dept`
- **Password**: `EXAM@DEPT2026`
- **Name**: Dr. Vikram Singh
- **Email**: vikram.singh@lpu.in

### Officer 2
- **Username**: `exam_dept2`
- **Password**: `EXAM@DEPT2026`
- **Name**: Ms. Anjali Verma
- **Email**: anjali.verma@lpu.in

---

## Management Level

Executive overview and system analytics.

### Management Executive
- **Username**: `management`
- **Password**: `MGMT@LPU2026`
- **Name**: Prof. Ashok Mittal
- **Email**: ashok.mittal@lpu.in

### System Administrator
- **Username**: `admin`
- **Password**: `ADMIN@LPU2026`
- **Name**: System Admin
- **Email**: admin@lpu.in
- **Special Access**: Full system access

---

## Quick Access Guide

### To Login:
1. Navigate to `/admin/login`
2. Select your access level from dropdown
3. Enter username and password
4. Click "Login to Admin Panel"

### Quick Login Button:
Click "View Demo Credentials" button on login page to auto-fill credentials.

---

## Permissions Summary

### Level 1 - HOD
- View department submissions
- Approve/Reject at HOD level
- Add verification comments
- Forward to HOS

### Level 2 - HOS
- View all school submissions
- Approve/Reject at HOS level
- Assign benefits (points, credits, scholarships)
- View department statistics
- Forward to Academic Affairs

### Level 3 - Academic Affairs
- View all university submissions
- Approve/Reject at Academic level
- Verify policy compliance
- View school-wise statistics
- Forward to Examination

### Level 4 - Examination
- View all submissions
- Final approval/rejection
- Update student records
- Issue certificates
- Release scholarships
- Complete the approval chain

### Management
- View all analytics
- Monitor system performance
- Export reports
- Identify bottlenecks
- No approval permissions (monitoring only)

---

## Security Notes

1. **Development Only**: These credentials are for demo/development purposes
2. **Production Setup**: Implement proper authentication:
   - Hash passwords (bcrypt, argon2)
   - Use JWT tokens or secure sessions
   - Implement 2FA for admin access
   - Add rate limiting
   - Log all admin activities
3. **Session Management**: Currently using localStorage (not secure for production)
4. **Audit Trail**: All login attempts should be logged
5. **Password Policy**: Production should require strong passwords with regular rotation

---

## Access URLs

- **Admin Login**: `/admin/login`
- **Admin Dashboard**: `/admin`
- **HOD Panel**: `/admin/hod`
- **HOS Panel**: `/admin/hos`
- **Academic Affairs**: `/admin/academic-affairs`
- **Examination**: `/admin/examination`
- **Management**: `/admin/management`

---

## Testing Workflow

1. Login as `hod_cse` → Approve achievement
2. Login as `hos_cse` → Assign benefits & approve
3. Login as `academic_affairs` → Verify policy & approve
4. Login as `exam_dept` → Complete processing
5. Login as `management` → View analytics

---

Last Updated: February 2, 2026
