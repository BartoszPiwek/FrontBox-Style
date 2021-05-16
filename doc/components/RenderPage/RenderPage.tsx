import Frame from 'react-frame-component';
import styles from './RenderPage.module.scss';
import { ResizableBox } from 'react-resizable';
import { createRef, ReactNode, RefObject, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import React from 'react';

export interface IRenderPage {
	style: string;
	children: ReactNode;
}

export const RenderPage = (params: IRenderPage) => {
	const { style, children } = params;

	const [isResizing, setResizing] = useState<boolean>(false);

	const iframeRef = createRef<any>();

	return (
		<ResizableBox
			className={styles.resize}
			width={500}
			height={200}
			axis="x"
			minConstraints={[360, 200]}
			onResizeStart={() => setResizing(true)}
			onResizeStop={() => setResizing(false)}
			handle={<span className={styles.resizeHandle} />}
		>
			<Frame
				ref={iframeRef}
				className={classNames(styles.iframe, { [styles.isGhost]: isResizing })}
				head={<style>{style}</style>}
				initialContent="<!DOCTYPE html><html><head></head><body></body></html>"
				draggable={true}
				loading="lazy"
				mountTarget="body"
			>
				<>
					{style && <style>{style}</style>}
					{children}
				</>
			</Frame>
		</ResizableBox>
	);
};
