import React from 'react'

const Main = () => {
    return (
        <>
            <div className="mains relative h-screen overflow-hidden">
                <div className="car absolute top-0 left-0 right-0">
                    <img src="car.png" alt="" />
                </div>
                <div className="road absolute -top-52 left-0 right-0">
                    <img src="road.jpg" alt="" />
                </div>
                <div className="text ">
                    <p>hellooo</p>
                </div>
            </div>
        </>
    )
}

export default Main