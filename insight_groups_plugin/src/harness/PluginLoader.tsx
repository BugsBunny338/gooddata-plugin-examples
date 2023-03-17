// (C) 2019-2021 GoodData Corporation
import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { DashboardStub, IEmbeddedPlugin } from "@gooddata/sdk-ui-loaders";
import PluginFactory from "../dp_insight_groups";
import { DEFAULT_DASHBOARD_ID } from "./constants";
import { DashboardConfig } from "@gooddata/sdk-ui-dashboard";

const Plugins: IEmbeddedPlugin[] = [
    {
        factory: PluginFactory,
        // NOTE: Add custom configuration here to test insight grouping
        parameters: JSON.stringify({
            group: [
                '3e16ebe3-7753-40c6-abc1-f549e7bf4d6c',
                'a178265c-53ba-4c15-8c1f-d7e168506c92'
            ]
        }),
    },
];
const Config: DashboardConfig = {
    mapboxToken: process.env.MAPBOX_TOKEN,
};

export const PluginLoader = (): JSX.Element => {
    return (
        <DashboardStub
            dashboard={idRef(process.env.DASHBOARD_ID ?? DEFAULT_DASHBOARD_ID)}
            loadingMode="staticOnly"
            config={Config}
            extraPlugins={Plugins}
        />
    );
};
