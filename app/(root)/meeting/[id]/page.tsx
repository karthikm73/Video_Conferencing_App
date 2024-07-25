"use client";

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { Call, StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'

const Meeting = ({ params:{id} }: { params: { id: string } }) => {

  const {user,isLoaded} = useUser();
  const [isSetupComplete,setIsSetupComplete] = useState(false);
  const {call,isCallLoading} = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader />;

  if (!call) {
    return <div>Call not found or error loading call.</div>;
  }
 
  return (
    <main className='h-screen w-full'>

    <StreamCall call={call} >
        <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
        ) : (
          <MeetingRoom />
        )}

        </StreamTheme>
    </StreamCall>
    </main>
  )
}

export default Meeting