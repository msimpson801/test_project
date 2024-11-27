import React, { useEffect } from 'react';
import anime from 'animejs';
import styled from '@emotion/styled';
import {useRenderCount} from "../Common/useRenderCount";

const Container = styled.div`
  background-color: transparent;
  width: 55px;
  height: 55px;
`;

const starPath = "M112,155C0,500 0,500 -112,155C-476,155 -476,155 -182,-59C-294,-405 -294,-405 0,-191C294,-405 294,-405 182,-59C476,155 476,155 112,155";
const heartPath = "M354,155C0,509 0,509 -354,155C-452,57 -452,-101 -354,-199C-256,-297 -98,-297 0,-199C98,-297 256,-297 354,-199C452,-101 452,57 354,155";

export default function StarHeart({ shape = "star", colour, updatesShape = false, className }) {


    const morphTo = (timeline, shape, className) => {
        timeline
            .add({
                targets: `.${className}`,
                d: [{ value: shape === "star" ? starPath : heartPath }],
            })
            .add(
                {
                    targets: `.${className}`,
                    rotate: shape === "star" ? -180 : 0,
                },
                "-=700"
            );
    };

    useEffect(() => {
        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo",
        });

        morphTo(timeline, shape, className);
    }, [shape]);

    return (
        <Container>
            <svg viewBox="-500 -500 1000 1000" width="64" height="64" >
                <path
                    id="shape"
                    className={className}
                    d={shape === "star" ? starPath : heartPath}
                    fill={colour}
                    transform={shape === "star" ? "rotate(-180)" : "rotate(0)"}
                />
            </svg>
        </Container>
    );
}
