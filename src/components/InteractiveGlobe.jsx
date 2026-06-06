import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const locations = [
  {
    name: "India",
    code: "IN",
    articleLabel: "Goa Research Summit",
    lat: 21,
    lng: 78,
    offset: [0.08, -0.18, 0],
    color: 0xc8a64d,
    href: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    articleLabel: "Dubai Summit",
    lat: 25.2,
    lng: 55.3,
    offset: [0.22, 0.08, 0.02],
    color: 0xffffff,
    href: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    name: "Germany",
    code: "DE",
    articleLabel: "Germany Summit",
    lat: 51,
    lng: 10,
    offset: [-0.18, 0.22, 0.02],
    color: 0xffffff,
    href: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    name: "United Kingdom",
    code: "GB",
    articleLabel: "London Summit",
    lat: 51.5,
    lng: -0.1,
    offset: [-0.28, -0.1, 0],
    color: 0xffffff,
    href: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
];

const ambientNodes = [
  { lat: -25, lng: 133, color: 0xddeee7 },
  { lat: -15, lng: -47, color: 0xc8a64d },
  { lat: 38, lng: -97, color: 0xddeee7 },
  { lat: 60, lng: 100, color: 0xddeee7 },
  { lat: -30, lng: 24, color: 0xc8a64d },
  { lat: 35, lng: 139, color: 0xddeee7 },
];

const AUTO_ROTATION_SPEED = 0.0042;

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function makeArc(start, end, height = 0.22) {
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(1 + height);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(64);
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function clipRoundedRect(ctx, x, y, width, height, radius) {
  roundedRect(ctx, x, y, width, height, radius);
  ctx.clip();
}

function drawFlag(ctx, code, x, y, width, height) {
  ctx.save();
  clipRoundedRect(ctx, x, y, width, height, 10);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, width, height);

  if (code === "IN") {
    ctx.fillStyle = "#ff9933";
    ctx.fillRect(x, y, width, height / 3);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y + height / 3, width, height / 3);
    ctx.fillStyle = "#138808";
    ctx.fillRect(x, y + (height * 2) / 3, width, height / 3);
    ctx.strokeStyle = "#000080";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x + width / 2, y + height / 2, 10, 0, Math.PI * 2);
    ctx.stroke();
  }

  if (code === "AE") {
    ctx.fillStyle = "#00732f";
    ctx.fillRect(x, y, width, height / 3);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y + height / 3, width, height / 3);
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y + (height * 2) / 3, width, height / 3);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x, y, width * 0.28, height);
  }

  if (code === "DE") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, width, height / 3);
    ctx.fillStyle = "#dd0000";
    ctx.fillRect(x, y + height / 3, width, height / 3);
    ctx.fillStyle = "#ffce00";
    ctx.fillRect(x, y + (height * 2) / 3, width, height / 3);
  }

  if (code === "GB") {
    ctx.fillStyle = "#012169";
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    ctx.strokeStyle = "#c8102e";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(x + width / 2, y);
    ctx.lineTo(x + width / 2, y + height);
    ctx.moveTo(x, y + height / 2);
    ctx.lineTo(x + width, y + height / 2);
    ctx.stroke();
    ctx.strokeStyle = "#c8102e";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(x + width / 2, y);
    ctx.lineTo(x + width / 2, y + height);
    ctx.moveTo(x, y + height / 2);
    ctx.lineTo(x + width, y + height / 2);
    ctx.stroke();
  }

  ctx.restore();
  ctx.strokeStyle = "rgba(11, 44, 77, 0.16)";
  ctx.lineWidth = 3;
  roundedRect(ctx, x, y, width, height, 10);
  ctx.stroke();
}

function createGlobeSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const ocean = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  ocean.addColorStop(0, "#0b2c4d");
  ocean.addColorStop(0.5, "#0e6b50");
  ocean.addColorStop(1, "#063f43");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const land = ctx.createLinearGradient(0, 0, canvas.width, 0);
  land.addColorStop(0, "rgba(221, 237, 231, 0.2)");
  land.addColorStop(1, "rgba(200, 166, 77, 0.14)");
  ctx.fillStyle = land;

  const drawLand = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fill();
  };

  drawLand([[440, 120], [512, 105], [610, 145], [624, 218], [566, 250], [498, 236], [454, 184]]);
  drawLand([[620, 185], [710, 166], [790, 215], [772, 300], [684, 314], [626, 266]]);
  drawLand([[292, 118], [366, 128], [392, 182], [345, 232], [278, 205], [250, 150]]);
  drawLand([[320, 242], [382, 270], [402, 352], [360, 430], [308, 360], [290, 292]]);
  drawLand([[728, 322], [806, 344], [842, 400], [780, 440], [720, 410]]);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createCountryLabelTexture(location) {
  const canvas = document.createElement("canvas");
  canvas.width = 760;
  canvas.height = 204;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowColor = "rgba(4, 27, 50, 0.2)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "rgba(250, 250, 248, 0.96)";
  roundedRect(ctx, 24, 32, 712, 132, 66);
  ctx.fill();
  ctx.shadowColor = "transparent";

  drawFlag(ctx, location.code, 64, 68, 88, 58);

  ctx.fillStyle = "#0b2c4d";
  ctx.font = "900 40px Inter, Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(location.name, 174, 82);

  ctx.fillStyle = "rgba(14, 107, 80, 0.95)";
  ctx.font = "850 24px Inter, Arial, sans-serif";
  ctx.fillText(location.articleLabel, 174, 122);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function disposeObject(object) {
  if (object.geometry) {
    object.geometry.dispose();
  }

  if (object.material) {
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => {
      material.map?.dispose();
      material.dispose();
    });
  }
}

function InteractiveGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.12, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "interactive-globe-surface";
    renderer.domElement.title = "Drag the globe. Select a country flag to open coverage.";
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.x = -0.12;
    scene.add(group);

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.28, 72, 72),
      new THREE.MeshStandardMaterial({
        map: createGlobeSurfaceTexture(),
        color: 0x0e6b50,
        roughness: 0.52,
        metalness: 0.08,
        transparent: true,
        opacity: 0.92,
      })
    );
    group.add(globe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.39, 72, 72),
      new THREE.MeshBasicMaterial({
        color: 0xddeee7,
        transparent: true,
        opacity: 0.12,
        side: THREE.BackSide,
      })
    );
    group.add(atmosphere);

    ambientNodes.forEach((node) => {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.026, 16, 16),
        new THREE.MeshBasicMaterial({
          color: node.color,
          transparent: true,
          opacity: 0.72,
        })
      );
      dot.position.copy(latLngToVector3(node.lat, node.lng, 1.35));
      group.add(dot);
    });

    const markerSprites = [];
    const nodePositions = locations.map((location) => ({
      ...location,
      vector: latLngToVector3(location.lat, location.lng, 1.34),
    }));

    nodePositions.forEach((location) => {
      const material = new THREE.SpriteMaterial({
        map: createCountryLabelTexture(location),
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      const [offsetX, offsetY, offsetZ] = location.offset;
      const basePosition = location.vector.clone().multiplyScalar(1.08);
      sprite.position.set(basePosition.x + offsetX, basePosition.y + offsetY, basePosition.z + offsetZ);
      sprite.scale.set(location.name.length > 12 ? 0.83 : 0.62, 0.18, 1);
      sprite.userData.href = location.href;
      sprite.userData.title = `${location.name}: ${location.articleLabel}`;
      group.add(sprite);
      markerSprites.push(sprite);
    });

    const india = nodePositions[0].vector;
    nodePositions.slice(1).forEach((location) => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(makeArc(india, location.vector));
      const line = new THREE.Line(
        lineGeometry,
        new THREE.LineBasicMaterial({
          color: location.color,
          transparent: true,
          opacity: 0.18,
        })
      );
      group.add(line);
    });

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(2.8, 2.5, 4);
    scene.add(keyLight);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      const safeWidth = Math.max(1, width);
      const safeHeight = Math.max(1, height);
      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(safeWidth, safeHeight, false);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const dragState = {
      active: false,
      lastX: 0,
      lastY: 0,
      startX: 0,
      startY: 0,
      pointerId: null,
    };
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const updatePointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const findHoveredMarker = (event) => {
      updatePointer(event);
      raycaster.setFromCamera(pointer, camera);
      return raycaster.intersectObjects(markerSprites, false)[0]?.object || null;
    };

    const clampRotationX = () => {
      group.rotation.x = Math.max(-0.95, Math.min(0.75, group.rotation.x));
    };

    const onPointerDown = (event) => {
      dragState.active = true;
      dragState.lastX = event.clientX;
      dragState.lastY = event.clientY;
      dragState.startX = event.clientX;
      dragState.startY = event.clientY;
      dragState.pointerId = event.pointerId;
      renderer.domElement.setPointerCapture?.(event.pointerId);
      renderer.domElement.style.cursor = "grabbing";
    };

    const onPointerMove = (event) => {
      if (!dragState.active) {
        renderer.domElement.style.cursor = findHoveredMarker(event) ? "pointer" : "grab";
        return;
      }
      const dx = event.clientX - dragState.lastX;
      const dy = event.clientY - dragState.lastY;
      group.rotation.y += dx * 0.006;
      group.rotation.x += dy * 0.004;
      clampRotationX();
      dragState.lastX = event.clientX;
      dragState.lastY = event.clientY;
    };

    const stopDragging = (event) => {
      const movement = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
      const clickedMarker = movement < 7 ? findHoveredMarker(event) : null;
      dragState.active = false;
      dragState.pointerId = null;
      renderer.domElement.releasePointerCapture?.(event.pointerId);
      renderer.domElement.style.cursor = clickedMarker ? "pointer" : "grab";
      if (clickedMarker?.userData.href) {
        window.open(clickedMarker.userData.href, "_blank", "noopener,noreferrer");
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", stopDragging);
    renderer.domElement.addEventListener("pointercancel", stopDragging);
    renderer.domElement.style.cursor = "grab";

    const worldPosition = new THREE.Vector3();
    let frameId = 0;
    const render = () => {
      if (!dragState.active) {
        group.rotation.y += AUTO_ROTATION_SPEED;
      }
      markerSprites.forEach((sprite) => {
        sprite.getWorldPosition(worldPosition);
        const isFacingCamera = worldPosition.z > -0.14;
        sprite.visible = isFacingCamera;
        sprite.material.opacity = isFacingCamera ? 1 : 0;
      });
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", stopDragging);
      renderer.domElement.removeEventListener("pointercancel", stopDragging);
      group.traverse(disposeObject);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="interactive-globe-canvas" ref={mountRef} aria-label="Interactive global homeopathy network"></div>;
}

export default InteractiveGlobe;
