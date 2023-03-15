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
        // TODO remove this before going to production
        parameters: JSON.stringify({
            "groupName1": [
                "e0b0e796-01a0-43fd-b18d-baf6a697a818",
                "c915e5a9-d521-45e0-aac9-45154939de0c"
            ],
            "groupName2": [
                "e61d9886-d929-456a-9188-88f2bf7d4499",
                "6cc77293-91c8-4325-bba3-aa5bcad45071"
            ],
            "groupName3": [
                "99c69fc0-d7a6-4e09-9136-5900c9958b33",
                "0ea02733-9f09-4e67-95fc-ca1da06ee94c"
            ],
            "groupName4": [
                "49a26e22-ef3f-4e03-97a4-67bb61ebd741",
                "6a374bd4-f5f7-4705-b0df-44bccfc1965a"
            ],
            "groupName5": [
                "ff1e1417-a9a4-4950-b81a-5b009a6e0e66",
                "c9abf6e4-75ff-4f68-b507-08ff93c1f4aa"
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
