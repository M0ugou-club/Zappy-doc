<div class="h-full m-8 flex">
    <div class="space-y-5 h-[90%] w-full overflow-y-scroll">
        <h1 class="h1 py-4"><b>AI</b></h1>
        <span>
            The AI is a program on its own where the main goal is to attain the lvl 8.
        </span>
        <hr class="!border-t-2">
        <h2 id="h2 py-4"><b>AI functionment</b></h2>
        <h2 id="h2 py-4"><b>Connection to the server:</b></h2>
        <span>
            <ul class="list-disc pl-5">
                <li>Connect to the server</li>
                <li>Send the team to the server</li>
                <li>check the server response</li>
            </ul>
        </span>
    <h1 class="h1 py-4"><b>The AI brain</b></h1>
<p><img src="../algo1.webp" alt="../algo1.webp">
<span>
        <i><b>1*:</b>
            Search item is a small algorytme, which will thanks to the vision of the player,
            will search where the requested item,<br/>
            the algorytme also manages the movement,
            so that the player finds and moves and takes directly the requested item.
        </i>
</span>
</p>
<p><i><b>2*:</b></i></p>
<img src="../algo2.webp" alt="../algo2.webp">
<p>
    <span>
        <i><b>3*:</b>Check Requirements is a small algorithm that looks at the player&#39;s inventory and checks what he needs to perform an incantation, <br/>
            whether he is missing any resources or players with him.</i>
    </span>
</p>
<p><i><b>4*:</b>Put Requirements, is a function that places all the items the player needs to cast an incantation on the ground.</i></p>
<p><i><b>5*:</b>Broadacting: our broadcasting system is very simple, it always follows the same pattern:</i></p>
<pre><code><span class="hljs-string">"team_name: order??broadcaster_level"</span>
</code></pre><p>Our AI lists 2 different messages:</p>

<li>a message to call teammates to invoke, the order will be &quot;ON;EVOLVE;OUUU;&quot;<br/>
example of the message a player would receive:
&quot;team1:ON;EVOLVE;OUUU;??2&quot;</li>
<li>a message to inform the calling player that we are ready. the order would be: &quot;chui;prêt;mon;gars?&quot;<br/>
example of the message a player would receive: team1:chui;pret;mon;gars??2</li>


<p><i><b>6*:</b>Go To direction, is a very simple algorythm that will make the player move towards a direction.</i></p>

    </div>
</div>