import { availableDays } from "@/components/available-doctor";
import { ProfileImage } from "@/components/profile-image";
import { RatingContainer } from "@/components/rating-container";
import { RecentAppointments } from "@/components/tables/recent-appointment";
import { getDoctorById } from "@/utils/services/doctor";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

import { BsCalendarDateFill, BsPersonWorkspace } from "react-icons/bs";
import { FaBriefcaseMedical, FaCalendarDays, FaClock } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const DoctorProfile = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { data, totalAppointment } = await getDoctorById(params?.id);

  if (!data) return null;

  return (
    <div className="bg-gray-100/60 h-full rounded-xl py-6 px-3 2xl:px-5 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-[70%]">
        <div className="flex flex-col gap-6">
          <div className="bg-white py-6 px-4 rounded-lg flex gap-4">
            <ProfileImage
              url={data?.img!}
              name={data?.name}
              className="size-20 bg-amber-400"
              textClassName="text-4xl text-black"
            />
            <div className="w-2/3 flex flex-col justify-between gap-x-4">
              <div className="flex items-center gap-4">
                <h1 className="text=xl font-semibold uppercase">
                  {data?.name}
                </h1>
              </div>
              <p className="text-sm text-gray-500">
                {data?.address || "No address information"}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 flex-wrap text-sm font-medium">
                <div className="w-full flex text-base">
                  <span>License #:</span>
                  <p className="font-semibold">{data?.license_number}</p>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FaBriefcaseMedical className="text-lg" />
                  <span className="capitalize">{data?.specialization}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <BsPersonWorkspace className="text-lg" />
                  <span className="capitalize">{data?.type}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdEmail className="text-lg" />
                  <span className="capitalize">{data?.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdLocalPhone className="text-lg" />
                  <span className="capitalize">{data?.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white w-full p-4 rounded-md space-y-2">
              <FaBriefcaseMedical className="size-6 text-pink-500" />
              <div>
                <h1 className="text-2xl">{totalAppointment}</h1>
                <span className="text-sm text-gray-500">Appointments</span>
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md space-y-2">
              <FaCalendarDays className="size-6 text-green-500" />
              <div>
                <h1 className="text-2xl">
                  {data?.working_days?.length}
                </h1>
                <span className="text-sm text-gray-500">Working Days</span>
              </div>
            </div>

            <div className="bg-white w-full p-4 rounded-md space-y-2">
              <FaClock className="size-6 text-yellow-500" />
              <div>
                <h1 className="text-2xl">
                  {availableDays({ data: data.working_days })}
                </h1>
                <span className="text-sm text-gray-500">Working Hours</span>
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md space-y-2">
              <BsCalendarDateFill className="size-6 text-blue-500" />
              <div>
                <h1 className="text-2xl">
                  {format(data?.created_at, "yyyy-MM-dd")}
                </h1>
                <span className="text-sm text-gray-500">Joined Date</span>
              </div>
            </div>
          </div>
        </div>
        {/* recent appointment */}

        <div className="bg-white rounded-xl p-4 mt-6">
          <RecentAppointments data={data?.appointments} />
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-[30%] flex flex-col gap-6">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Quick Links</h1>

          <div className="mt-8 flex gap-4 flex-wrap text-sm text-gray-500">
            <Link
              href={`/record/appointments?id=${data?.id}`}
              className="p-3 rounded-md bg-yellow-60 hover:underline"
            >
              Doctor Appointments
            </Link>

            <Link
              href="#"
              className="p-3 rounded-md bg-purple-50 hover:underline"
            >
              Apply for Leave
            </Link>
          </div>
        </div>

        <RatingContainer id={params?.id} />
      </div>
    </div>
  );
};

export default DoctorProfile;