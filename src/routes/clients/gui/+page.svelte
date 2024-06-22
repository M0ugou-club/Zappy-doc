<div class="h-full m-8 flex">
    <div class="space-y-5 h-[90%] w-full overflow-y-scroll">
        <h1 class="h1 py-4"><b>GUI</b></h1>
        <span>
            The GUI is a 3D graphical interface for the game that shows the map and all the players in real time.<br/>
            It shows all the items on the map, the players, it shows an animation when a player is doing a ritual and when a player is broadcasting.<br/>
            It is made in C++ and is principally using the <b>RayLib</b> library for all the graphical aspects.
        </span>
        <hr class="!border-t-2" />
        <h2 class="h2 py-4"><b>Controls</b></h2>
        <span>
            The <b>GUI</b> is controlled with the mouse and the keyboard.<br/>
            The <b>camera</b> is always looking at the center of the map and is rotating around it.<br/>
            The <b>camera</b> can be moved with ZQSD.<br/>
            <ul class="list-disc pl-5">
                <li>Z - Move the camera forward</li>
                <li>Q - Move the camera to the left</li>
                <li>S - Move the camera backward</li>
                <li>D - Move the camera to the right</li>
            </ul>
            This also works with WASD or any other <b>keyboard layouts</b>.<br/>
        </span>
        <h2 class="h2 py-4"><b>Displaying</b></h2>
        <span>
            The GUI is running in a loop that updates the display, FPS are limited to 60.<br/>
            This loop is drawing all the elements of the game, the map, the players, the items, the animations, etc.<br/>
            All of those elements have their own update function that is called by the loop.<br/>
        </span>
        <h2 class="h2 py-4"><b>Map</b></h2>
        <span>
            The <b>map</b> is a <b>2D white and black grid</b> that represents a <b>chess board.</b><br/>
            The map size is given by the server at connection, <b>it can be a square or rectangle size</b> (8x8 or 3x14 for example).<br/>
            The map is then generated in the form of a table of cubes. Each time a cube is created, its position is calculated based on the center and the previous cube.<br/>
            For each cube created, its color is changed to black or white based on a boolean that toggles each time. This boolean also inverts each time the last cube of a row in the table is created. In this way, a <b>checkerboard</b> pattern is formed.<br/>
            <b>On each tile of the map</b>, there can be found a <b>list of eggs</b>, a <b>list of items</b>, an <b>x/y position</b>, and four <b>pointers (North/South/East/West) to the adjacent tiles</b>. The game board represents the entirety of this world's surface, like a world map. If a player exits by the right of the board, they will come back through the left. Up->down,
            and so on...
        </span>
        <h2 class="h2 py-4"><b>Camera</b></h2>
        <span>
            To create the <b>camera</b>, we encapsulated the Raylib <b>3D camera</b>. Raylib already has a camera system and preset camera setups. However, we decided to manage the camera ourselves because the presets did not fit what we wanted to achieve. During the initialization of the camera, its <b>target</b> is set to the <b>center</b> of the map and this will not change. We position it at a certain distance from the target, which remains constant. We also set its FOV to 90 and its type to "CAMERA_PERSPECTIVE" according to Raylib's types. The camera has a move method and an update method. The <b>move</b> method allows the camera to be moved using the <b>"zqsd"</b> keys. The "z" and "s" keys are used to move forward and backward relative to the center of the map. The "q" and "d" keys are used to rotate around the center of the map. Finally, the update method is used to handle key events and update the camera in real time.
        </span>
        <h2 class="h2 py-4"><b>Players</b></h2>
        <span>
            <i>Nothing for the moment</i>
        </span>
        <h2 class="h2 py-4"><b>Items</b></h2>
        <span>
            <b>Items</b> are displayed on the map as a 3D object, they are represented by a <b>3D model</b> with a texture that spins on itself with a hover animation, very much <b>like</b> the items in the game <b>Minecraft</b>.<br/>
            There are <b>different types of items</b>, each with a different model and texture. There is <b>only one type</b> of each item on a tile that can be stacked. The <b>stacks</b> are represented by being <b>one on top of the other.</b><br/>
            Contrary to what you might think, the <b>items are not objects</b>, but it's only just a <b>renderer</b> that is displayed on the map.
        </span>
        <h2 class="h2 py-4"><b>Broadcast</b></h2>
        <span>
            The <b>Broadcast</b> is represented like a Minecraft chat at the bottom left of the screen. It also displays other information like the available teams or a welcome message. The messages broadcasted are sent by the <b>server</b> and are displayed in real time.<br/>
            When a message is coming, <b>RayLib Texts</b> are created containing the message, and a semi-transparent black rectangle rendered before the text to make it readable against the background. All of this is <b>encapsulated</b> in a class that has an update function that is called by the main update loop to be rendered each frame.<br/>
            Each message has its own <b>life timer</b>, when it reaches 0, another timer starts to <b>fade the message out</b>. It is then deleted from the list of messages to be displayed.
        </span>
    </div>
</div>