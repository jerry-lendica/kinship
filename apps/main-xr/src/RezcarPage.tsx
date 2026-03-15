const REZCAR_IMAGE_SRC = "/rezcarMV.png";

export default function RezcarPage() {
  return (
    <div className="rezcar-page-root" enable-xr>
      <img className="rezcar-scene-image" src={REZCAR_IMAGE_SRC} alt="Rezcar Monument Valley scene" />
    </div>
  );
}
