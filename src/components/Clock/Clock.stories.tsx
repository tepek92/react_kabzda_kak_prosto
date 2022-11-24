import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'Example/Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

export function ClockVisual() {
    // console.log('rendering');
    return (
       <Clock />
    )
}