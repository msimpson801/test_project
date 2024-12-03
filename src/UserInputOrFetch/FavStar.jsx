import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/react';


const roundAnimation = keyframes` 0% {
                                      transform: scale(0);
                                  }
                                      11% {
                                          transform: scale(0);
                                          border-width: 2.5rem;
                                      }
                                      16% {
                                          transform: scale(1.2);
                                          border-width: 1.67rem;
                                      }
                                      19% {
                                          transform: scale(1.5);
                                          border-width: 0;
                                      }
                                      100% {
                                          transform: scale(1.3);
                                          border-width: 0;
                                      } `;
const starAnimation = keyframes` 0% {
                                     transform: scale(0);
                                 }
                                     17% {
                                         transform: scale(0);
                                     }
                                     22% {
                                         transform: scale(1.3);
                                     }
                                     28% {
                                         transform: scale(0.8);
                                     }
                                     35% {
                                         transform: scale(1.1);
                                     }
                                     45% {
                                         transform: scale(1);
                                     }
                                     79% {
                                         fill: #FFAC33;
                                     }
                                     80% {
                                         fill: #DEE0E0;
                                     }
                                     100% {
                                         fill: #DEE0E0;
                                     } `;
const sparkleAnimation = keyframes` 0% {
                                        transform: scale(0.3);
                                    }
                                        12% {
                                            transform: scale(0.3);
                                        }
                                        25% {
                                            transform: scale(1.5);
                                        }
                                        100% {
                                            transform: scale(1.5);
                                        } `;
const sparklesAnimation = keyframes` 0% {
                                         opacity: 0;
                                         width: 0.33rem;
                                         height: 0.33rem;
                                     }
                                         10% {
                                             opacity: 0;
                                             width: 0.33rem;
                                             height: 0.25rem;
                                         }
                                         12% {
                                             opacity: 1;
                                             width: 1.67rem;
                                             height: 0.25rem;
                                         }
                                         20% {
                                             opacity: 1;
                                             width: 0.83rem;
                                             height: 0.33rem;
                                         }
                                         23% {
                                             opacity: 1;
                                             width: 0.5rem;
                                             height: 0.25rem;
                                         }
                                         28% {
                                             width: 0.25rem;
                                             height: 0.2rem;
                                         }
                                         37% {
                                             opacity: 0;
                                         }
                                         100% {
                                             opacity: 0;
                                             width: 0.25rem;
                                             height: 0.25rem;
                                         } `

const FavContainer = styled.div` display: flex;
    align-items: center;
    justify-content: center;
    background: #F6FAFC;
    width: 100vw;
    height: 100vh; `;
const FavStar = styled.svg` position: absolute;
    width: 5rem;
    fill: #FFAC33;
    animation: ${starAnimation} 4s infinite linear; `;
const FavRound = styled.span` position: absolute;
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 2.5rem solid #FFAC33;
    animation: ${roundAnimation} 4s infinite linear; `;
const FavSparkle = styled.span` position: absolute;
    width: 5rem;
    height: 5rem;
    animation: ${sparkleAnimation} 4s infinite linear; `;
const FavSparkleI = styled.span` position: absolute;
    width: 1.67rem;
    height: 0.33rem;
    border-radius: 125px;
    background: #FB610F;
    transform-origin: 0 0;
    animation: ${sparklesAnimation} 4s infinite linear;

    &:nth-of-type(1) {
        transform: translate(1rem, 0.63rem) rotate(46deg);
    }

    &:nth-of-type(2) {
        transform: translate(4.17rem, 0.91rem) rotate(138deg);
    }

    &:nth-of-type(3) {
        transform: translate(4.55rem, 2.5rem) rotate(-140deg);
    }

    &:nth-of-type(4) {
        transform: translate(2.27rem, 5rem) rotate(-90deg);
    }

    &:nth-of-type(5) {
        transform: translate(0.25rem, 3.73rem) rotate(-36deg);
    } `;
const Description = styled.p` position: absolute;
    font-family: monospace;
    padding: 0.5rem; `;

export default function StarRating() {
    return (
        <div>
            <FavContainer>
                <div className="fav"><FavStar viewBox="0 0 114 110">
                    <path
                        d="M48.7899002,5.95077319 L39.3051518,35.1460145 L8.60511866,35.1460145 C4.87617094,35.1519931 1.57402643,37.5554646 0.422104463,41.1020351 C-0.7298175,44.6486057 0.529798011,48.5337314 3.54354617,50.7297298 L28.3840111,68.7758317 L18.8992627,97.971073 C17.7496089,101.520283 19.0141379,105.406227 22.0323508,107.599168 C25.0505637,109.792109 29.1370771,109.794067 32.1573906,107.604021 L56.9864557,89.5693186 L81.8269206,107.615421 C84.8472342,109.805467 88.9337475,109.803509 91.9519605,107.610568 C94.9701734,105.417627 96.2347024,101.531683 95.0850486,97.9824729 L85.6003001,68.7986315 L110.440765,50.7525296 C113.466376,48.5582894 114.732852,44.663975 113.576698,41.1097771 C112.420545,37.5555791 109.105303,35.1516627 105.367793,35.1574144 L74.6677595,35.1574144 L65.1830111,5.96217312 C64.0286485,2.41064527 60.7208743,0.00457304502 56.9864557,5.53367114e-06 C53.2527571,-0.00420898295 49.9421526,2.39931752 48.7899002,5.95077319 Z"></path>
                </FavStar> <FavRound/> <FavSparkle> <FavSparkleI/> <FavSparkleI/> <FavSparkleI/> <FavSparkleI/>
                    <FavSparkleI/> </FavSparkle></div>
            </FavContainer>
        </div>
    )
}
