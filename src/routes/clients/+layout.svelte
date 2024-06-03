<script lang="ts">
    import {
        AppRail,
        AppRailTile,
        AppRailAnchor,
    } from "@skeletonlabs/skeleton";
    import { base } from '$app/paths';
    import {
        BrainCircuit,
        Laptop

    } from "lucide-svelte";
    import { onMount } from "svelte";
    import { AppShell } from "@skeletonlabs/skeleton";

    let currentRoute: string = "";
    onMount(() => {
        currentRoute = window.location.href.toString().split(window.location.host)[1];
    });
</script>

<AppShell>
    <!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <AppRailAnchor href="{base}/clients/ai" title="AI" selected={currentRoute === base+"/clients/ai"} data-sveltekit-reload>
                <svelte:fragment slot="lead"><BrainCircuit /></svelte:fragment>
                <span>AI</span>
            </AppRailAnchor>
            <AppRailAnchor href="{base}/clients/gui" title="GUI" selected={currentRoute === base+"/clients/gui"} data-sveltekit-reload>
                <svelte:fragment slot="lead"><Laptop /></svelte:fragment>
                <span>GUI</span>
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
