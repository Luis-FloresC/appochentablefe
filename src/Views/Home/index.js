
import React from 'react'
import Page from "../../Components/Page";

const Home = () => {
    return (
        <Page showNavBar={true}
            useAbsoluteCenter={false}
            pageTitle="Ochenta Summary">
            <div className="flex flex-col w-full border-opacity-50 mt-0 p-4 min-h-screen" >
                <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            </div>

        </Page>
    )
}

export default Home;