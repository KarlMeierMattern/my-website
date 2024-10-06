import Card from '@/components/card'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="grid grid-rows-[auto_auto] m-8">
        <div className="grid-rows-1 mb-4">
            <Card>About</Card>
        </div>
        <div className="grid-rows-2">
            <div className="grid grid-cols-[0.5fr_0.5fr] grid-rows-[0.5fr_0.5fr] w-full h-full gap-4">
                <div className="grid-rows-1 grid-cols-1">
                    <Card>
                        <FontAwesomeIcon icon={faObjectUngroup} />
                        <div className="">
                            <h1>Web development</h1>
                            <p>I love creating & building responsive web-apps</p>
                        </div>
                    </Card>
                </div>
                <div className="grid-rows-1 grid-cols-2">
                    <Card>About</Card>
                </div>
                <div className="grid-rows-2 grid-cols-1">
                    <Card>About</Card>
                </div>
                <div className="grid-rows-2 grid-cols-2">
                    <Card>About</Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
