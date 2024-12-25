import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST =async (req:NextRequest) => {

    const reqData = await req.json();

    const email = reqData.email;

    const cookieStore = await cookies();
    

    if(!email){
        cookieStore.set("isLoggedIn" , "false")
        return NextResponse.json({
            isLoggedIn : false
        })
    }

    return NextResponse.json({
        
        isLoggedIn: true
    })
}