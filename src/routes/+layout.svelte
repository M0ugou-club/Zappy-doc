<script lang="ts">
    import "../app.postcss";

    // Highlight JS
    import hljs from "highlight.js/lib/core";
    import "highlight.js/styles/github-dark.css";
    import { storeHighlightJs, AppShell } from "@skeletonlabs/skeleton";
    import {
        AppRail,
        AppRailTile,
        AppRailAnchor,
    } from "@skeletonlabs/skeleton";
    import { base } from '$app/paths';
    import {
        Egg,
        Server,
        Handshake,
        MonitorSmartphone

    } from "lucide-svelte";
    import { onMount } from "svelte";
    import xml from "highlight.js/lib/languages/xml"; // for HTML
    import css from "highlight.js/lib/languages/css";
    import javascript from "highlight.js/lib/languages/javascript";
    import typescript from "highlight.js/lib/languages/typescript";

    hljs.registerLanguage("xml", xml); // for HTML
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
    storeHighlightJs.set(hljs);

    // Floating UI for Popups
    import {
        computePosition,
        autoUpdate,
        flip,
        shift,
        offset,
        arrow,
    } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    let currentRoute: string = "";
    onMount(() => {
        currentRoute = window.location.href.toString().split(window.location.host)[1];
    });
</script>

<AppShell>
    <!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <AppRailAnchor href="{base}/" title="Project" selected={currentRoute === base+"/"} data-sveltekit-reload>
                <svelte:fragment slot="lead"><Egg /></svelte:fragment>
                <span>Zappy</span>
            </AppRailAnchor>
            <AppRailAnchor href="{base}/server" title="Server" selected={currentRoute.startsWith(base+"/server")} data-sveltekit-reload>
                <svelte:fragment slot="lead"><Server /></svelte:fragment>
                <span>Server</span>
            </AppRailAnchor>
            <AppRailAnchor href="{base}/clients/ai" title="Clients" selected={currentRoute.startsWith(base+"/clients")} data-sveltekit-reload>
                <svelte:fragment slot="lead"><MonitorSmartphone /></svelte:fragment>
                <span>Clients</span>
            </AppRailAnchor>
        </AppRail>
    </svelte:fragment>
    <!-- (sidebarRight) -->
    <!-- (pageHeader) -->
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <!-- (pageFooter) -->
    <!-- (footer) -->
</AppShell>
