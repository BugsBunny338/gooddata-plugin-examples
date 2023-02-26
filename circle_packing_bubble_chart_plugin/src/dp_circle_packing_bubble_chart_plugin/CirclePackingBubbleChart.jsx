import React from "react";
import { useInsightWidgetDataView } from "@gooddata/sdk-ui-dashboard";

import { BubbleChart } from "./BubbleChart";

const indigoColors = ['#14B2E2', '#06C08E', '#E54D42', '#F18600', '#AB56A3', '#F4D522', '#93A1AD', '#6BBFD8', '#B589B1', '#EE8780', '#F1AB54', '#85D1BC'];

const CirclePackingBubbleChart = (props) => {
    const {
        LoadingComponent,
        ErrorComponent,
        widget,
    } = props;

    const { result, error, status } = useInsightWidgetDataView({
        insightWidget: widget,
    });

    if (status === "loading" || status === "pending") {
        return <LoadingComponent />;
    }

    if (status === "error") {
        return <ErrorComponent message={error?.message ?? "Unknown error"} />;
    }

    if (result) {
        const data = result
            .data()
            .slices()
            .toArray()
            .map((slice, i) => ({
                name: slice.sliceTitles()[0],
                value: parseFloat(slice.rawData()[0]),
                fill: indigoColors[i % indigoColors.length]
            }));

        console.log(data);
        console.log(BubbleChart);

        return (
            <div style={{ height: '100%', width: '100%' }}>
                <p>hello</p>
            </div>
        );
    }
};

export default CirclePackingBubbleChart;
