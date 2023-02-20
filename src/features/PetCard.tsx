import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Pet } from "../app/models/pet";

interface Props {
    pet: Pet;
}

export default function ProductCard({ pet }: Props) {
    const [loading, setLoading] = useState(false);

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {pet.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={pet.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={pet.photoUrls[0]}
                title={pet.name} 
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    Status: {pet.status}
                </Typography>
            </CardContent>
        </Card>
    )
}