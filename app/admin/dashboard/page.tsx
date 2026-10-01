import UploadImages from '@/components/UploadImages'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <UploadImages />
        </div>
    )
}

export default Dashboard
