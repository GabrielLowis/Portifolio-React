import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      addEventListeners();
      handleLinkHoverEvents();
      return () => {
        removeEventListeners();
      };
    }
  }, []);

  if (
    typeof window === "undefined" ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  ) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${
          clicked ? "scale-50" : ""
        } ${linkHovered ? "scale-150" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"} ${
          clicked ? "scale-150" : ""
        } ${linkHovered ? "scale-200 opacity-50" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
