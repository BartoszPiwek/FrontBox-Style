import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import './../styles/main.scss';

function APP(props: AppProps) {
	const { Component } = props;

	return <Component />;
}

export default APP;
