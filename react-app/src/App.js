import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Recipes/homepage";
import OneRecipe from "./components/Recipes/oneRecipe";
import OneIngredient from "./components/Ingredients/one_ingredient";
import OneCategory from "./components/Categories/category_recipes";
import Footer from "./components/Footer";
import UserRecipes from "./components/Recipes/RecipesByUser";
import UserIngredients from "./components/Ingredients/IngredientsByUser";
import { getAllCategoriesThunk } from "./store/category";
import NotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserLikedRecipes from "./components/Recipes/userLikedRecipes";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/recipes/current">
            <ProtectedRoute>
              <UserRecipes />
            </ProtectedRoute>
          </Route>
          <Route exact path="/recipes/:id">
            <OneRecipe />
          </Route>
          <Route exact path="/recipes/likes/current">
            <ProtectedRoute>
              <UserLikedRecipes />
            </ProtectedRoute>
          </Route>
          <Route exact path="/ingredients/current">
            <ProtectedRoute>
              <UserIngredients />
            </ProtectedRoute>
          </Route>
          <Route exact path="/ingredients/:id">
            <OneIngredient />
          </Route>
          <Route exact path="/categories/:id">
            <OneCategory />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
