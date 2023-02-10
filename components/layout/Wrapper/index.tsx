import { When } from "react-if";
import { tw } from "../../../utils/functions/style";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from 'tsparticles-engine';

import NavigationBar from "../../navigation/NavigationBar";
import Footer from "../Footer";

interface Props {
    children: React.ReactNode;
    footer?: boolean;
    centered?: boolean;
    className?: string;
}

const Wrapper: React.FC<Props> = ({children, footer, centered, className}) => {

    const options : any = {
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1
          },
          size: {
            value: { min: 1, max: 12 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
      };
    
      const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
      }, []);

    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <div className={tw("sticky top-0 left-0 flex flex-col min-h-screen")}>
                <NavigationBar />
                <Particles options={options} init={particlesInit} />
                <main
                    className={tw(
                        "relative flex-1 bg-background min-w-[360px] overflow-auto",
                        centered && "flex items-center justify-center",
                        className
                    )}>
                    {children}
                </main>
                <When condition={footer}>
                    <Footer />
                </When>
            </div>
        </div>
    );
};

export default Wrapper;
 