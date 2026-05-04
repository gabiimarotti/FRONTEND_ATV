function alternarGrupos() {
            const divA = document.getElementById('grupoA');
            const divB = document.getElementById('grupoB');
            const divC = document.getElementById('grupoC');

            divA.innerHTML = `
                <h2>🅳 Grupo D</h2>
                <h3>Seleções: </h3>
                <ul>  
                    <li>Estados Unidos</li>
                    <li>Paraguai</li>
                    <li>Austrália</li>
                    <li>Turquia</li>
                </ul>
                <p>Fatos: Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</p>
            `;

            divB.innerHTML = `
                <h2>🅴 Grupo E</h2>
                <h3>Seleções: </h3>
                <ul>  
                    <li>Alemanha</li>
                    <li>Equador</li>
                    <li>Costa do Marfim</li>
                    <li>Curaçao</li>
                </ul>
                <p>Fatos: Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
            `;

            divC.innerHTML = `
                <h2>🅵 Grupo F</h2>
                <h3>Seleções: </h3>
                <ul>  
                    <li>Holanda</li>
                    <li>Japão</li>
                    <li>Tunísia</li>
                    <li>Suécia</li>
                </ul>
            <p>Fatos: Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
        `;

}