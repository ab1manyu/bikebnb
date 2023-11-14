'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { MdSportsMotorsports } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { RiEBikeFill } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { MdOutlineElectricBike } from "react-icons/md";

export const categories = [
    {
        label: 'Sport Bikes',
        icon: MdSportsMotorsports,
        description: 'Craving speed?',
    },
    {
        label: 'Cruiser Bikes',
        icon: RiMotorbikeFill,
        description: 'Want a smooth ride?',
    },
    {
        label: 'Scooters',
        icon: RiEBikeFill,
        description: 'Need to get around in style?',
    },
    {
        label: 'E-Bikes',
        icon: MdOutlineElectricBike,
        description: 'Charge anywhere and go!',
    },
    {
        label: 'Delivery Bikes',
        icon: RiEBike2Fill,
        description: 'Works great with GrubHub!',
    },
]

const Categories = () => {
    return (
        <Container>
            <div className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            ">
                {categories.map((item) => (
                        <CategoryBox
                            key = {item.label}
                            label = {item.label}
                            description = {item.description}
                            icon = {item.icon
                        }/>
                    ))
                }
                
            </div>
        </Container>
    )
};

export default Categories