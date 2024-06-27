<div class="h-full m-8 flex">
    <div class="space-y-5 h-[90%] w-full overflow-y-scroll">
        <h1 class="h1 py-4"><b>AI</b></h1>
        <span>
            The AI is a program on its own where the main goal is to attain the lvl 8.
        </span>
        <hr class="!border-t-2">
        <h2 id="h2 py-4">
            <b>
                AI functionment
            </b>
        </h2>
        <span>
            
        </span>
<ul>
<li><strong>Connection</strong> to the server:<ol>
<li>Connect to the server</li>
<li>Send the team to the server</li>
<li>check the server response</li>
</ol>
</li>
<li><p>The AI <strong>brain</strong></p>
<ol>
<li><p><img src="image1" alt="/algo1.webp">
Search item is a small algorytme, which will thanks to the vision of the player, will search where the requested item, the algorytme also manages the movement, so that the player finds and moves and takes directly the requested item.</p>
</li>
<li><p><img src="image2" alt="/algo1.webp"> *3: Check Requirements is a small algorithm that looks at the player&#39;s inventory and checks what he needs to perform an incantation, whether he is missing any resources or players with him.</p>
</li>
<li><p>Put Requirements, is a function that places all the items the player needs to cast an incantation on the ground.</p>
</li>
<li><p>Broadacting: our broadcasting system is very simple, it always follows the same pattern:</p>
<pre><code>           <span class="hljs-string">"team_name: order??broadcaster_level"</span>
</code></pre><p>Our AI lists 2 different messages</p>
<ul>
<li>a message to call teammates to invoke, the order will be &quot;ON;EVOLVE;OUUU;&quot;
example of the message a player would receive:
&quot;team1:ON;EVOLVE;OUUU;??2&quot;</li>
<li>a message to inform the calling player that we are ready. the order would be: &quot;chui;prêt;mon;gars?&quot;
example of the message a player would receive: team1:chui;pret;mon;gars??2</li>
</ul>
</li>
<li><p>Go To direction, is a very simple algorythm that will make the player move towards a direction.</p>
</li>
</ol>
</li>
</ul>
    </div>
</div>