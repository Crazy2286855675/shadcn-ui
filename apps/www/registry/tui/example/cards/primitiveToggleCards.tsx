import React from 'react'
import { Toggle } from '../../ui/toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Icon } from '../../ui/icon'
const PrimitiveToggleCards = () => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle>Toggles</CardTitle>
                <CardDescription>
                    Toggles
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 space-x-2">

                <div className='flex space-x-2 justify-center py-3 flex-wrap'>
                    <Toggle aria-label="Outlined Small Toggle" variant={"outline"} size="sm">
                        Outlined Small Toggle
                    </Toggle>

                    <Toggle aria-label="Outlined Small Toggle" variant={"outline"} size="sm">
                        <Icon name="fan-solid" className="h-6 w-6 mr-1" />Outlined Icon Toggle
                    </Toggle>

                    <Toggle aria-label="Default Small Toggle" variant={"default"} size="sm">
                        Default Small Toggle
                    </Toggle>

                    <Toggle aria-label="Default Small Toggle" variant={"default"} size="sm" className='mt-2'>
                        <Icon name="fan-solid" className='mr-1' />
                        Default Small Toggle
                    </Toggle>
                </div>
                <div className="text-sm italic justify-end flex pb-3">
                    <p className='flex items-center'>
                        <Icon name="info-circle-solid" className='mr-1 h-4 w-4 text-gray-600' /> Small sized outlined & default toggle with or without icons
                    </p>
                </div>
                <hr />
                <div className='flex space-x-2 justify-center py-3 flex-wrap'>
                    <Toggle aria-label="Outlined Default Toggle" variant={"outline"} size="default">
                        Outlined Default Toggle
                    </Toggle>

                    <Toggle aria-label="Outlined Default Toggle" variant={"outline"} size="default">
                        <Icon name="fan-solid" className="h-6 w-6 mr-1" /> Outlined Default Toggle
                    </Toggle>

                    <Toggle aria-label="Default Default Toggle" variant={"default"} size="default" >
                        Default Default Toggle
                    </Toggle>

                    <Toggle aria-label="Default Default Toggle" variant={"default"} size="default" className='mt-2'>
                        <Icon name="fan-solid" className="h-6 w-6 mr-1" /> Default Default Toggle
                    </Toggle>
                </div>
                <div className="text-sm italic justify-end flex pb-3">
                    <p className='flex items-center'>
                        <Icon name="info-circle-solid" className='mr-1 h-4 w-4 text-gray-600' /> Default sized outlined & default toggle with or without icons
                    </p>
                </div>
                <hr />
                <div className='flex space-x-2 justify-center pt-3 flex-wrap'>
                    <Toggle aria-label="Outlined Large Toggle" variant={"outline"} size="lg">
                        Outlined Large Toggle
                    </Toggle>

                    <Toggle aria-label="Outlined Large Toggle" variant={"outline"} size="lg">
                        <Icon name="fan-solid" className="h-6 w-6 mr-1" /> Outlined Large Toggle
                    </Toggle>
                    <Toggle aria-label="Default Large Toggle" variant={"default"} size="lg" className='mt-2'>
                        Default Large Toggle
                    </Toggle>

                    <Toggle aria-label="Default Large Toggle" variant={"default"} size="lg">
                        <Icon name="fan-solid" className="h-6 w-6 mr-1" /> Default Large Toggle
                    </Toggle>
                </div>
                <div className="text-sm italic justify-end flex pt-3">
                    <p className='flex items-center'>
                        <Icon name="info-circle-solid" className='mr-1 h-4 w-4 text-gray-600' /> Large sized outlined & default toggle with or without icons
                    </p>
                </div>
                <hr />
                <CardHeader>
                    Examples
                </CardHeader>
                <div className='flex space-x-2 justify-center py-3 flex-wrap'>
                    <Toggle aria-label="Available to hire" variant={"outline"} size="sm">
                        Available to hire
                    </Toggle>

                    <Toggle aria-label="Annual billing (Save 10%)" variant={"default"} size="sm">
                        Annual billing (Save 10%)
                    </Toggle>
                </div>
            </CardContent>
        </Card >
    )
}

export default PrimitiveToggleCards
