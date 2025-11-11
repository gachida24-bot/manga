import { supabase } from './supabase.js';

  async function cargarMangas() {
    const { data, error } = await supabase
      .from('web_mangas')
      .select('*')
      .order('id', { ascending: true });

    const contenedor = document.getElementById('grid');
    contenedor.innerHTML = '';

    if (error) {
      contenedor.innerHTML = '<p>Error al cargar mangas 😢</p>';
      console.error(error);
      return;
    }

    if (data.length === 0) {
      contenedor.innerHTML = '<p>No hay mangas aún.</p>';
      return;
    }

    data.forEach(manga => {
      const card = document.createElement('div');
      card.classList.add('manga');
      card.innerHTML = `
        <img src="${manga.thumbnail}" alt="${manga.title}">
        <h3>${manga.title}</h3>
      `;
      contenedor.appendChild(card);
    });
  }

  cargarMangas();