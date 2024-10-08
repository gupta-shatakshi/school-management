import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbDeviceAnalytics } from "react-icons/tb";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">

                {/* Teacher Management Card */}
                <div
                    onClick={() => navigate('/admin/teacher-management')}
                    className="bg-blue-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 p-6 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <GiTeacher style={{ width: '5rem', height: '5rem' }} className="text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Manage Teachers</h3>
                    <p className="text-blue-500">Add, update, or remove teachers</p>
                </div>

                {/* Class Management Card */}
                <div
                    onClick={() => navigate('/admin/class-management')}
                    className="bg-green-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 p-6 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <FaBookOpenReader style={{ width: '5rem', height: '5rem' }} className="text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Manage Classes</h3>
                    <p className="text-green-500">Create, update, or view classes</p>
                </div>

                {/* Student Management Card */}
                <div
                    onClick={() => navigate('/admin/student-management')}
                    className="bg-yellow-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 p-6 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <PiStudentFill style={{ width: '5rem', height: '5rem' }} className="text-yellow-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">Manage Students</h3>
                    <p className="text-yellow-500">Add, update, or remove students</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Income/Expense Analytics Card */}
                <div
                    onClick={() => navigate('/admin/income-expense-analytics')}
                    className="bg-purple-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 p-6 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <TbDeviceAnalytics style={{ width: '5rem', height: '5rem' }} className="text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">View Income/Expense Analytics</h3>
                    <p className="text-purple-500">Analyze financial reports</p>
                </div>

                {/* Student Analytics Card */}
                <div
                    onClick={() => navigate('/admin/student-analytics')}
                    className="bg-teal-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 p-6 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <DiGoogleAnalytics style={{ width: '5rem', height: '5rem' }} className="text-teal-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">View Student Analytics</h3>
                    <p className="text-teal-500">Analyze student demographics</p>
                </div>
            </div>
        </div>
    )
};

export default AdminDashboard;
