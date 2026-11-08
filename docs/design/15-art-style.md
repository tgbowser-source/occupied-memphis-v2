# Art style and camera (LOCKED 2026-11-07)

This replaces the earlier 1st/3rd-person 3D camera, which Thomas rejected because the 3D models didn't look good.

**Reference:** `art/reference/style-ref-isometric-wargame.jpg` (a Blitzkrieg/Nival-style painted isometric still). It is a style reference only. Don't copy its town, logo, or branding.

## The look
- Hand-painted isometric. Not a photo, not live 3D, not chunky pixel art.
- High oblique 2:1 camera. Shadows fall to the lower right. Warm afternoon light.
- Memphis around 1950: cobbles and packed dirt, brick shops, red clay tile roofs, wooden houses with tin porches, oaks, Mississippi docks, sandbags, and wooden checkpoints.
- Figures are small next to buildings but stay readable. Buildings carry the look.
- Palette: summer green, brick red, stone gray, river blue-green.
- No logos, no on-map text, and no UI baked into the art.

## Build notes (from the Grok handoff)
- Ground, buildings, props, and characters are separate layers. Never use one flat picture as the playable map.
- Y-sort the sprites. Collision stays on the tile grid.
- Movement is screen-relative WASD.
- Characters need a 4-direction walk: player (male and female), civilian, Wehrmacht, and IJA.
