<div class="h-full m-8 flex">
    <div class="space-y-5 h-[90%] w-full overflow-y-scroll">
        <h1 class="h1 py-4"><b>GUI</b></h1>
        <span>
            The GUI is a 3D graphical interface for the game that show the map and all the players in real time.<br/>
            It show all the items on the map, the players, it shows an animation when a player is doing a ritual and when a player is broadcasting.
        </span>
        <hr class="!border-t-2" />
        <h2 class="h2 py-4"><b>Controls</b></h2>
        <span>
            The GUI is controlled with the mouse and the keyboard.<br/>
            The camera is always looking at the center of the map and is rotating around it.<br/>
            The camera can be moved with ZQSD.<br/>
            <dl class="list-dl">
                <div>
                    <span class="badge bg-primary-500">🎮</span>
                    <span class="flex-auto">
                        <dt>Z</dt>
                        <dd>Move the camera forward</dd>
                    </span>
                </div>
                <div>
                    <span class="badge bg-primary-500">🎮</span>
                    <span class="flex-auto">
                        <dt>Q</dt>
                        <dd>Move the camera to the left</dd>
                    </span>
                </div>
                <div>
                    <span class="badge bg-primary-500">🎮</span>
                    <span class="flex-auto">
                        <dt>S</dt>
                        <dd>Move the camera backward</dd>
                    </span>
                </div>
                <div>
                    <span class="badge bg-primary-500">🎮</span>
                    <span class="flex-auto">
                        <dt>D</dt>
                        <dd>Move the camera to the right</dd>
                    </span>
                </div>
            </dl>
            This also works with WASD or other keyboard layouts.<br/>
        </span>
        <h2 class="h2 py-4"><b>Displaying</b></h2>
        <span>
            The GUI is running in a loop that update the display, FPS are limited to 60.<br/>
            This loop is drawing all the elements of the game, the map, the players, the items, the animations, etc.<br/>
            All of those elements have their own update function that is called by the loop.<br/>
        </span>
        <h2 class="h2 py-4"><b>Map</b></h2>
        <span>
            The map is a 2D white and black grid that represent a chess board.<br/>
            The map size is given by the server at connection, it can be a square or rectangle size (8x8 or 3x14 for example).
        </span>
    </div>
</div>