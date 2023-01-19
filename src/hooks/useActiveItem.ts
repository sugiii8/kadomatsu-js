import interact from "interactjs";
import { RefObject, useCallback } from "react";

export const useActiveItem = () => {
  const enableItem = useCallback((targetElement: HTMLElement) => {
    if (!targetElement) {
      return;
    }

    interact(targetElement)
      .draggable({
        inertia: false,
      })
      .on("dragmove", (event: any) => {
        console.log("dragging...");
        console.log(event.dx, event.dy);

        const target = event.target;
        const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        target.style.transform = "translate(" + x + "px, " + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      })
      .on("dragend", (event: any) => {
        const textEl = event.target.querySelector("p");

        textEl &&
          (textEl.textContent =
            "moved a distance of " +
            Math.sqrt(
              (Math.pow(event.pageX - event.x0, 2) +
                Math.pow(event.pageY - event.y0, 2)) |
                0
            ).toFixed(2) +
            "px");
      });

    targetElement.classList.add("active");
    console.log("sss", targetElement.classList);
  }, []);

  const disableItem = useCallback((targetElement: HTMLElement) => {
    if (!targetElement) {
      return;
    }

    interact(targetElement).unset();
    targetElement.removeAttribute("style");
  }, []);

  return { enableItem, disableItem };
};
