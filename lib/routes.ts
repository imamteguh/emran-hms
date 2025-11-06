import { createRouteMatcher } from "@clerk/nextjs/server";

type RouteAccessProps = {
    [key: string]: string[];
};

export const routeMatchers = {
    admin: createRouteMatcher([
        "/admin(.*)",
        "/patient(.*)",
        "/record/users",
        "/record/doctors(.*)",
        "/record/patients",
        "/record/staffs",
        "/record/doctors",
    ]),
    patient: createRouteMatcher([
        "/patient(.*)",
        "/patient/registrations"
    ]),
    doctor: createRouteMatcher([
        "/doctor(.*)",
        "/record/doctors(.*)",
        "/record/patients",
        "/patient(.*)",
        "/record/staffs",
    ])
}