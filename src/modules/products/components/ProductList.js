import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import CategroyList from './CategoryList'
import ProductItem from './ProductItem'
import { makeStyles } from '@material-ui/core/styles'
import * as actions from '../actions'
import querystring from 'query-string'
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isLoading, items: products } = useSelector((state) => state.products)
  const { search } = useLocation()
  const { category } = querystring.parse(search)
  
  useEffect(() => {
    const action = actions.loadProducts()
    dispatch(action)
  }, [dispatch])
  return (
    <>
      <Typography variant="h2" component="h1" className={classes.root}>
        {category || 'All'} Products
      </Typography>
      <CategroyList />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
