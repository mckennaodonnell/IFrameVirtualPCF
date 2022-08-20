import { DefaultButton, Stack, ThemeProvider } from "@fluentui/react";
import * as React from "react";
import { IFrameControlProps } from "./Component.types";

export const IFrameControl = React.memo((props: IFrameControlProps) => {
  const {
    src,
    frameBorder,
    width,
    height,
    onFullScreen,
    isFullScreen,
    showFullScreenBtn,
  } = props;

  const containerSize = React.useMemo(() => {
    return {
      height: height,
      width: width,
    } as React.CSSProperties;
  }, [height]);

  const rootContainerStyle: React.CSSProperties = React.useMemo(() => {
    return {
      height: height,
      width: width,
    };
  }, [width, height]);

  return (
    <ThemeProvider style={containerSize}>
      <Stack verticalFill grow style={rootContainerStyle}>
        <Stack.Item
          grow
          style={{ position: "relative", backgroundColor: "white" }}
        >
          <iframe
            src={src}
            frameBorder={frameBorder}
            width={width}
            height={height}
          ></iframe>
        </Stack.Item>
      </Stack>
      <Stack>
        {showFullScreenBtn && (
          <Stack.Item grow align="center">
            {!isFullScreen && (
              <DefaultButton onClick={onFullScreen}>Full screen</DefaultButton>
            )}
          </Stack.Item>
        )}
      </Stack>
    </ThemeProvider>
  );
});

IFrameControl.displayName = "IFrameControl";
