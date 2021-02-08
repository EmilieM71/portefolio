/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import PartTitle from './PartTitle';

function AdminCategory() {
  const [allCat, setCat] = useState([]);
  const [name, setNameCat] = useState('');
  const [slug, setSlugCat] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/categories`)
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        if (error.response) {
          NotificationManager.error('Error');
        } else {
          NotificationManager.error(
            'Erreur',
            'Veuillez réessayer ultérieurement',
          );
        }
      });
  }, []);

  const AddCat = () => {
    // eslint-disable-next-line no-console
    console.log('addcat');
    axios
      .post(`http://localhost:5000/api/categories`, {
        name,
        slug,
      })
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        if (error.response) {
          NotificationManager.error('Error');
        } else {
          NotificationManager.error(
            'Erreur',
            'Veuillez réessayer ultérieurement',
          );
        }
      });
  };

  const UpdateCat = (id) => {
    return axios.put(`http://localhost:5000/api/categories/${id}`);
  };
  const DeleteCat = (id) => {
    axios.delete(`http://localhost:5000/api/categories/${id}`).then(() => {
      setCat((prevAllCat) => prevAllCat.filter((cat) => cat.id !== id));
    });
  };

  return (
    <div className="container">
      <PartTitle title="Les catégories" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allCat.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.sulg}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={UpdateCat(cat.id)}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={DeleteCat(cat.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Ajouter une catégorie</h2>
      <form className="form-horizontal" onSubmit={AddCat}>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinputname">
            Nom de la catégorie
          </label>
          <div className="col-md-4">
            <input
              id="textinputname"
              name="textinputname"
              type="text"
              value={name}
              className="form-control input-md"
              onChange={(e) => {
                setNameCat(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="slug">
            Slug
          </label>
          <div className="col-md-4">
            <input
              id="slug"
              name="slug"
              type="text"
              value={slug}
              className="form-control input-md"
              onChange={(e) => {
                setSlugCat(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary" onClick={AddCat}>
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminCategory;
