import { ReactElement, createElement } from "react";
import { FileDisplayerPreviewProps } from "../typings/FileDisplayerProps";

export function preview(props: FileDisplayerPreviewProps): ReactElement {
    return (
        <div className="widget-file-viewer-preview" style={props.styleObject}>
            {props.file ? (
                <div className="widget-file-viewer-preview-file">
                    📄 {props.file}
                </div>
            ) : (
                <div className="widget-file-viewer-preview-empty">
                    Select a file
                </div>
            )}
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/FileDisplayer.css");
}
