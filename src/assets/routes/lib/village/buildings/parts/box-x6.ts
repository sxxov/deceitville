import box_x6_bin from './box-x6.bin?url';
import woods_color_jpg from './woods_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "Box.009",
			"scale": [
				1.2056101560592651,
				1.2056101560592651,
				1.2056101560592651
			],
			"translation": [
				-4.266852378845215,
				7.2289228439331055,
				40.3882942199707
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.215577971373942,
						0.215577971373942,
						0.215577971373942
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "wooden_color",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.112",
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
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "woods_color",
			"uri": woods_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 168,
			"max": [
				0.6746344566345215,
				0.5059092044830322,
				0.6743209362030029
			],
			"min": [
				-0.6743073463439941,
				-0.5065973997116089,
				-0.6746208667755127
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 168,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 168,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 324,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1655,
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
			"byteLength": 1656,
			"uri": box_x6_bin
		}
	]
}