import React, { useEffect, useRef, useState } from "react";

function SketchFabViewer({ modelUid }) {
  const iframeRef = useRef();
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    const client = new window.Sketchfab(iframeRef.current);
    
    client.init(modelUid, {
      success: function(api) {
        api.start();
        api.addEventListener("viewerready", function() {
          console.log("Viewer is ready");

          // Get annotations when the viewer is ready
          api.getAnnotationList(function(err, annotations) {
            if (err) {
              console.error("Error fetching annotations", err);
            } else {
              console.log("Annotations: ", annotations);
              setAnnotations(annotations); // Set the annotations to state
            }
          // api.getPostProcessing(function(err, settings) {
          //   if (err) {
          //     console.error("Error fetching settings", err);
          //   } else {
          //     console.log("settings: ", settings);
          //   }})
          });
        });
      },
      error: function() {
        console.error("Error with SketchFab Viewer API.");
      },
      annotations_visible: true,
      annotations_autoplay: false,
    });
  }, [modelUid]);

  return (
    <div>
      {/* SketchFab Viewer */}
      <iframe
        ref={iframeRef}
        title="Sketchfab Viewer"
        src={`https://sketchfab.com/models/${modelUid}/embed`}
        width="640"
        height="480"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      {/* Display extracted annotations */}
      <div>
        <h3>Annotations:</h3>
        <ul>
          {annotations.map((annotation, index) => (
            <li key={index}>
              <strong>{annotation.title}:</strong>{" "}
              {/* Use 'rendered' or 'raw' for the content */}
              {typeof annotation.content === 'object'
                ? annotation.content.rendered || annotation.content.raw
                : annotation.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SketchFabViewer;
