import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import packageInfo from "../../package.json";

export const client = createDeliveryClient({
    projectId: "f9397322-2816-00bd-c3d1-8686576112ae",
    globalHeaders: (config) => (config.customHeaders || []).concat([{
        header: "X-KC-SOURCE",
        value: `${packageInfo.name};${packageInfo.version}`
    }])
});