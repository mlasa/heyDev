import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário no Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">            
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43733159?s=460&v=4" alt="Marcella Letícia"/>
              <div className="user-info">
                <strong>Marcella Letícia</strong>
                <span>Javascript, VueJS</span>
              </div>
            </header>
            <p>I'm a student of the Information Systems course who discovered development and marveled. I like to be engaged to problems solution and giving life to systems.</p>
            <a href="https://github.com/mlasa">Ir para o perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43733159?s=460&v=4" alt="Marcella Letícia"/>
              <div className="user-info">
                <strong>Marcella Letícia</strong>
                <span>Javascript, VueJS</span>
              </div>
            </header>
            <p>I'm a student of the Information Systems course who discovered development and marveled. I like to be engaged to problems solution and giving life to systems.</p>
            <a href="https://github.com/mlasa">Ir para o perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43733159?s=460&v=4" alt="Marcella Letícia"/>
              <div className="user-info">
                <strong>Marcella Letícia</strong>
                <span>Javascript, VueJS</span>
              </div>
            </header>
            <p>I'm a student of the Information Systems course who discovered development and marveled. I like to be engaged to problems solution and giving life to systems.</p>
            <a href="https://github.com/mlasa">Ir para o perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43733159?s=460&v=4" alt="Marcella Letícia"/>
              <div className="user-info">
                <strong>Marcella Letícia</strong>
                <span>Javascript, VueJS</span>
              </div>
            </header>
            <p>I'm a student of the Information Systems course who discovered development and marveled. I like to be engaged to problems solution and giving life to systems.</p>
            <a href="https://github.com/mlasa">Ir para o perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
