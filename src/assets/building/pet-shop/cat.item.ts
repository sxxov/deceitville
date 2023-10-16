import cat_item_bin from './cat.item.bin?url';
import Cat_bump_jpg from './Cat_bump.jpg?url';
import Cat_diffuse_jpg from './Cat_diffuse.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "cat.item",
			"scale": [
				0.030771534889936447,
				0.030771534889936447,
				0.030771534889936447
			],
			"translation": [
				-4.000002384185791,
				1,
				0
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				}
			},
			"name": "Cat",
			"normalTexture": {
				"index": 0,
				"scale": 0
			},
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "12221_Cat_v1_l3",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "Cat_bump",
			"uri": Cat_bump_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Cat_diffuse",
			"uri": Cat_diffuse_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 36530,
			"max": [
				6.277744293212891,
				18.675039291381836,
				15.888339042663574
			],
			"min": [
				-6.2774553298950195,
				-18.93225860595703,
				-44.99496078491211
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 36530,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 36530,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 211728,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 174221,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 174224,
			"uri": cat_item_bin
		}
	]
}